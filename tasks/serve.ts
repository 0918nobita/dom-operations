import http from 'http';
import { Server as StaticServer } from 'node-static';
import open from 'open';

const file = new StaticServer('.');

const server = http.createServer((req, res) => {
    req.addListener('end', () => {
        file.serve(req, res);
    }).resume();
});

server.listen(8080);

open('http://localhost:8080/dist');
