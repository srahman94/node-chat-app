var socket = io();

socket.on('connect', function() {
    console.log('connect to server');

    socket.emit('createMessage', {
        from: 'sujon',
        text: 'hey this is sr'
    });
});

socket.on('disconnect', function() {
    console.log('disconnect from server');
});

socket.on('newMessage', function(message) {
    console.log('newMessage', message);
});