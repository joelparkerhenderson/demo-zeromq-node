console.log('Puller a.k.a. consumer is starting');
var zmq = require('zeromq');
var sock = zmq.socket('pull');

console.log('Puller is connecting to port 3000');
sock.connect('tcp://127.0.0.1:3000');

console.log('Puller is getting messages');
sock.on('message', function(msg){
  console.log('work: %s', msg.toString());
});
