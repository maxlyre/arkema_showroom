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

var alive = {
  "2Dobj":{},
  "2Dcur" : {},
  "2Dblb" :{}
}

function decodeOSCTuioBundle(msg){
  let jsonMessage = {};

  let decoded;
  let bundle = oscmsg.decode(msg, { strict: true, strip: true, bundle: true });
      if (bundle.error) {
        return;
      }
      bundle.elements.forEach((message) => {
        // console.log(message)
            let type= message.elements[0].args[0];
            decoded =  TuioMessagetoJson(message);
            if(decoded != undefined){
              jsonMessage[type] = decoded;
            }
            
      });
      elementsManager(jsonMessage);

      return jsonMessage;
}

function decodeOSCTuioMessage(msg){
  let jsonMessage;
  let decoded;
  let bundle = oscmsg.decode(msg, { strict: true, strip: true, bundle: false });
      if (bundle.error) {
        return;
      }
      let type= msg.elements[0].args[0];
      decoded =  TuioMessagetoJson(message);
      if(decoded != undefined){
        jsonMessage[type] = decoded;
      }

      return jsonMessage;
}
function TuioMessagetoJson(msg){
  let jsonMessage;
  let message = msg.elements[0];
  let args =message.args;
  switch (args[0]) {
    case 'set':
      switch (message.address) {
        case '/tuio/2Dobj':
        jsonMessage = decode2DObjectMessage(args);
          break;
        case '/tuio/2Dcur':
          jsonMessage =decode2DCursorMessage(args)
          break;
        case '/tuio/2Dblb':
        jsonMessage =  decode2DBlobMessage(args)
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

function decode2DObjectMessage(message ){
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

function decode2DCursorMessage(message ){
  
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

function decode2DBlobMessage(message ){
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

function elementsManager(messages){
  // console.log(messages)

  let aliveLists =alive[messages.alive.elementType];
  // console.log(aliveLists)
  if(messages.set != undefined){
    if(aliveLists[messages.set.sessionId]== undefined){
      console.log("add",messages.set.sessionId)
    }else{
      console.log('update',messages.set.sessionId)
    }
    aliveLists[messages.set.sessionId] = messages.set;
    aliveLists[messages.set.sessionId].fseq = messages.fseq;
  }

  let deletedElements = [];
  let alivesKeys = Object.keys(aliveLists)

  for( let i =0;i<alivesKeys.length;i++){
    if(!messages.alive.aliveIDs.includes(parseInt(alivesKeys[i]))){
      deletedElements.push(alivesKeys[i]);
    }
  }
  if(deletedElements.length > 0){
    for(let i =0;i<deletedElements.length;i++){
      console.log("delete ",deletedElements[i])
      delete aliveLists[deletedElements[i]];
    }
  }
  console.log(aliveLists)
}
module.exports.decodeOSCTuioBundle = decodeOSCTuioBundle;
module.exports.decodeOSCTuioMessage = decodeOSCTuioMessage;
