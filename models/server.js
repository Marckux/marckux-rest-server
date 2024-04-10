
require('dotenv').config();
const express = require('express');

class Server {
  constructor() {
    this.port = process.env.PORT || 3000;
    this.app = express();
    this.server = null;
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.get('/api', (req, res) => {
      res.send('Welcome to the API!');
    });
  }

  run() {
    this.server = this.app.listen(this.port, () => {
      console.log(`The server is running at port ${this.port}`);
    });
  }

  close() {
    this.server.close();
  }
}

module.exports = Server;
