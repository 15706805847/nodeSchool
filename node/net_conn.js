var net = require('net')
var strftime = require('strftime')

var server = net.createServer(function (socket) {
 // socket handling logic
 var date = new Date()
 data = strftime('%F %R', date);

 socket.write(data+"\n");

 socket.end("");

})
server.listen(process.argv[2])
