const data = require('./db')

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8000;

// Bind the router db to the app
server.db = router.db;

server.use(middlewares);
server.use(router);

server.listen(port);
