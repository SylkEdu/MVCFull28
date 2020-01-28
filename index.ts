import * as http from 'http';
import server from './src/config/server';
import './src/config/mongoConnection'
import './src/config/pgConnection'

const Server: http.Server = http.createServer(server);



Server.listen(4000, function () {
    console.log("\x1b[3m","\x1b[33m", 'Server in port 4000');
    console.log("\x1b[37m", "***********************")
});


