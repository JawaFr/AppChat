const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

const messages = [];

io.on('connection', (socket) => {
  console.log('connecté');

  socket.emit('initialMessages', messages);

  socket.on('message', (message) => {
    messages.push(message);
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('déconnecté');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
