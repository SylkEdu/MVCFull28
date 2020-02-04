const express = require('express');
import router from '../Views/routes';

var bodyParser = require('body-parser')
var app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json())

app.set('port', process.env.PORT || 4000);

app.use(router)

export default app