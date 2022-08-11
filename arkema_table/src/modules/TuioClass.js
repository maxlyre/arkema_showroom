/*
* Tuio OSC message bundle decoder
* Transform a tuio OSC bundle or a message in json/int
*
* No argument : object with Alive, Set & Fseq
* set argument : object with set data
* alive argument : alive int
* fseq argument : fseq int
*/


const oscmsg = require("osc-msg");
const dgram = require("dgram");
const EventEmitter = require('events').EventEmitter


class Tuio{
  constructor(ip,port){
    //Event var
    this.event  = new EventEmitter();

    //Save datas
    this.ip = ip;
    this.port = port;

    //Init connection
    this.udpSocket =  dgram.createSocket("udp4");
    this.udpSocket.on("listening", ()=>{this.onSocketListening()});
    this.udpSocket.on("message", (msg)=>{this.onMessage(msg)});
    this.udpSocket.bind(this.port, this.ip);

    //Create list of elements
    this.alive = {
      "2Dobj":{},
      "2Dcur" : {},
      "2Dblb" :{}
    }

  }

  /**
   * Connection to server
   */
  //Event on the connection
  onSocketListening () {
    var address = this.udpSocket.address();
    this.event.emit('listening',address);
  }

  //On new message decode
  onMessage(msg){
    this.decodeOSCTuioBundle(msg)
  }

  /**
   * TUIO
   */

  //Decode Bundle message from OSC
  decodeOSCTuioBundle(msg){
    let jsonMessage = {};

    let decoded;
    let bundle = oscmsg.decode(msg, { strict: true, strip: true, bundle: true });
        if (bundle.error) {
          return;
        }
        bundle.elements.forEach((message) => {
              let type= message.elements[0].args[0];
              decoded =  this.TuioMessagetoJson(message);
              if(decoded != undefined){
                jsonMessage[type] = decoded;
              }
              
        });
        this.elementsManager(jsonMessage);

  }

//Decode not bundle message
  decodeOSCTuioMessage(msg){
    let jsonMessage;
    let decoded;
    let bundle = oscmsg.decode(msg, { strict: true, strip: true, bundle: false });
        if (bundle.error) {
          return;
        }
        let type= msg.elements[0].args[0];
        decoded =  this.TuioMessagetoJson(message);
        if(decoded != undefined){
          jsonMessage[type] = decoded;
        }

        this.elementsManager(jsonMessage);
  }

  //Tranform message to json
  TuioMessagetoJson(msg){
    let jsonMessage;
    let message = msg.elements[0];
    let args =message.args;
    switch (args[0]) {
      case 'set':
        switch (message.address) {
          case '/tuio/2Dobj':
          jsonMessage = this.decode2DObjectMessage(args);
            break;
          case '/tuio/2Dcur':
            jsonMessage =this.decode2DCursorMessage(args)
            break;
          case '/tuio/2Dblb':
          jsonMessage =  this.decode2DBlobMessage(args)
          break;
          default:
            console.log(`Don't recognize the kind of the object`);
      }

      break;
      case 'alive':
          let aliveIDs = [];
          for(let i=1;i<args.length;i++){
            aliveIDs.push(args[i])
          }
          jsonMessage = {
            aliveIDs : aliveIDs,
            elementType : message.address.replace('/tuio/',"")
          };
      break;
      case 'fseq':
          jsonMessage = {fseq : args[1]};
      break;
      case 'source':
          jsonMessage = {source : args[1]};
      break;
      default:
    }


    return jsonMessage;
  }

  decode2DObjectMessage(message ){
    let jsonMessage={};
    var fields = [
      'sessionId',
      'classId',
      'xPosition',
      'yPosition',
      'aAngle',
      'xVelocity',
      'yVelocity',
      'aRotationSpeed',
      'motionAcceleration',
      'rotationAccleration'
    ];

    for (var j=1; j < message.length; j++ ){
      jsonMessage[fields[j-1]] = message[j];
    }

    return jsonMessage;
  }

  decode2DCursorMessage(message ){
    
    let jsonMessage={};
    var fields = [
      'sessionId',
      'xPosition',
      'yPosition',
      'xVelocity',
      'yVelocity',
      'motionAcceleration'
    ];

    for (var j=1; j < message.length; j++ ){
      jsonMessage[fields[j-1]] = message[j];
    }
    return jsonMessage;
  }

  decode2DBlobMessage(message ){
    let jsonMessage = {};
    var fields = [
      'sessionId',
      'xPosition',
      'yPosition',
      'aAngle',
      'width',
      'height',
      'area',
      'xVelocity',
      'yVelocity',
      'aRotationSpeed',
      'motionAcceleration',
      'rotationAccleration'
    ];

    for (var j=1; j < message.length; j++ ){
      jsonMessage[fields[j-1]] = message[j];
    }

    return jsonMessage;
  }

  elementsManager(messages){
    //Get list of saved object of type X
    let aliveLists =this.alive[messages.alive.elementType];

    //Get if set exist on message
    if(messages.set != undefined){
      let elem = messages.set;
      elem.fseq = messages.fseq;
      elem.type = messages.alive.elementType;
      
      //If not in the list, add element event
      if(aliveLists[messages.set.sessionId]== undefined){
        elem.change = "add";
        this.event.emit('add',elem);
      }else{
        //If in the list update element event
        elem.change = "update";
        this.event.emit('update',elem);
      }
      //Add / update element in list
      aliveLists[messages.set.sessionId] = elem;
    }

  
    let deletedElements = [];
    let alivesKeys = Object.keys(aliveLists)
    
    //Get if element is in alive list
    for( let i =0;i<alivesKeys.length;i++){
      if(!messages.alive.aliveIDs.includes(parseInt(alivesKeys[i]))){
        deletedElements.push(alivesKeys[i]);
      }
    }
    //If element not in the list, delete them
    if(deletedElements.length > 0){
      for(let i =0;i<deletedElements.length;i++){
        aliveLists[deletedElements[i]].change = "delete";
        this.event.emit('delete',aliveLists[deletedElements[i]]);
        delete aliveLists[deletedElements[i]];
      }
    }
  }
}

module.exports = Tuio;