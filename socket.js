module.exports = (server) => {
    var io = require('socket.io')(server);

    io.on('connection', function (socket) {
        console.log('a user connected');
        socket.on('disconnect', function () {
            console.log('user disconnected');
        });

        socket.on('stream', function (image) {
            // console.log('Streaming');
            socket.broadcast.emit('stream', image);
        });
    });
}