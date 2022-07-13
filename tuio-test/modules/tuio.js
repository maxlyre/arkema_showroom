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

function decodeOSCTuioBundle(msg,type){
  let jsonMessage;
  if(type == undefined){
    jsonMessage = {};
  }
  let decoded;
  let bundle = oscmsg.decode(msg, { strict: true, strip: true, bundle: true });
      if (bundle.error) {
        return;
      }
      bundle.elements.forEach((message) => {
        // console.log(message)
        switch(type){
          case 'set':
            decoded =  TuioMessagetoJson(message,'set');
            if(decoded != undefined){
              jsonMessage = decoded;
            }
          break;
          case 'alive':
            decoded =  TuioMessagetoJson(message,'alive');
            if(decoded != undefined){
              jsonMessage = decoded;
            }
          break;
          case 'fseq':
            decoded =  TuioMessagetoJson(message,'fseq');
            if(decoded != undefined){
              jsonMessage = decoded;
            }
          break;
          default:
          jsonMessage[message.elements[0].args[0]] = TuioMessagetoJson(message);
        }
      });
      return jsonMessage;
}

function decodeOSCTuioMessage(msg,type){
  let jsonMessage;
  let decoded;
  let bundle = oscmsg.decode(msg, { strict: true, strip: true, bundle: false });
      if (bundle.error) {
        return;
      }
        switch(type){
          case 'set':
            decoded =  TuioMessagetoJson(message,'set');
            if(decoded != undefined){
              jsonMessage = decoded;
            }
          break;
          case 'alive':
            decoded =  TuioMessagetoJson(message,'alive');
            if(decoded != undefined){
              jsonMessage = decoded;
            }
          break;
          case 'fseq':
            decoded =  TuioMessagetoJson(message,'fseq');
            if(decoded != undefined){
              jsonMessage = decoded;
            }
          break;
        }

      return jsonMessage;
}
function TuioMessagetoJson(msg,type){
  let jsonMessage;
  let message = msg.elements[0];
  let args =message.args;
  console.log("message ",message)
  switch (args[0]) {
    case 'set':
    if(type == 'set' || type == undefined){
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
    }

    break;
    case 'alive':
      if(type == 'alive' || type == undefined){
        jsonMessage = args[1];
      }
    break;
    case 'fseq':
      if(type == 'fseq' || type == undefined){
        jsonMessage = args[1];
      }
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

module.exports.decodeOSCTuioBundle = decodeOSCTuioBundle;
module.exports.decodeOSCTuioMessage = decodeOSCTuioMessage;
