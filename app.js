const Server = require("./models/server");

const server = new Server();

server.routes();
server.run();