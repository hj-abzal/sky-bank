import express from 'express';
import http from 'http';
import {Server, Socket} from 'socket.io';
import mongoose from 'mongoose';
import {MongoDBUris, PORT} from './lb-1-main/config';
import {appUse} from './lb-1-main/app';
import {routes} from './lb-1-main/routes';


const app = express();

appUse(app)
routes(app)

const server = http.createServer(app);
const socketServer = new Server(server);

socketServer.on('connection', (socket: Socket) => {
    //onConnect(socketServer) // (socketServer: Server) => (socket: Socket) =>
});

mongoose.connect(MongoDBUris)
    .then(() => {
        console.log('MongoDB is connected successfully!');

        const port = process.env.PORT || PORT;

        server.listen(port, async () => {
            console.log('Server listening on port: ' + port);
        });
    })
    .catch(e => console.log('Connection error: ' + {...e}));

process.on('unhandledRejection', (reason, promise) => {
    console.log('UnhandledRejection: ', reason, promise);
});