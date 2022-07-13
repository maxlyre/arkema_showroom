
const dgram = require("dgram");
var tuio = require('./modules/tuio.js');
const udpSocket =  dgram.createSocket("udp4");
udpSocket.on("listening", onSocketListening);
udpSocket.bind(3333, "0.0.0.0");

udpSocket.on("message", function(msg) {
    //console.log(msg);
    console.log("--------------------------------")
    tuio.decodeOSCTuioBundle(msg)
});

function onSocketListening () {
    var address = udpSocket.address();
    console.log("TuioServer listening on: " + address.address + ":" + address.port);
};
