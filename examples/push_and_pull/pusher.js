console.log('Pusher a.k.a. producer is starting');
var zmq = require('zeromq');
var sock = zmq.socket('push');

console.log('Pusher is binding to port 3000');
sock.bindSync('tcp://127.0.0.1:3000');

console.log('Pusher is sending work every 500ms');
setInterval(function(){
  console.log('sending work');
  sock.send('some work');
}, 500);
