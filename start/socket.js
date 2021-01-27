'use strict'

/*
|--------------------------------------------------------------------------
| Websocket
|--------------------------------------------------------------------------
|
| This file is used to register websocket channels and start the Ws server.
| Learn more about same in the official documentation.
| https://adonisjs.com/docs/websocket
|
| For middleware, do check `wsKernel.js` file.
|
*/

const Ws = use('Ws')
Ws 
  .channel('chat', 'ChatController')
  const io = require('socket.io')();
io.listen(3000);
io.on('connection', function (socket) {
  console.log(socket.id)
})

// Ws.channel('chat', ({ socket }) => {
//   console.log('user joined with %s socket id', socket.id)
// })
 