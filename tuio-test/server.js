
// const dgram = require("dgram");
// var tuio = require('./modules/tuio.js');
// const udpSocket =  dgram.createSocket("udp4");
// udpSocket.on("listening", onSocketListening);
// udpSocket.bind(3333, "0.0.0.0");

// udpSocket.on("message", function(msg) {
//     //console.log(msg);
//     console.log("--------------------------------")
//     tuio.decodeOSCTuioBundle(msg)
// });

// function onSocketListening () {
//     var address = udpSocket.address();
//     console.log("TuioServer listening on: " + address.address + ":" + address.port);
// };


var Tuio = require('./modules/TuioClass.js');

const tuioElement = new Tuio( "0.0.0.0",3333);

tuioElement.event.on('listening',(address)=>{
    console.log("TuioServer listening on: " + address.address + ":" + address.port);
})

tuioElement.event.on('add',(element)=>{
    console.log("add",element);
})
tuioElement.event.on('update',(element)=>{
    console.log("update",element);
})

tuioElement.event.on('delete',(element)=>{
    console.log("delete",element);
})