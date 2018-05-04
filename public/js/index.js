var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  // socket.emit('createEmail', {
    // to: 'jen@example.com',
    // text: 'Hey. This is Andrew.'
  // });
// }); //(sending data client to server, display data on cmd)

socket.emit('createMessage', {
    from: 'Yogita',
    text: 'Yup,user creates message.'
  });
});

 
socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

// socket.on('newEmail', function (email) {
  // console.log('New email', email);
// }); //client listen this event, display data on browser's console

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});
