const express = require('express');
import router from '../Views/routes';

var bodyParser = require('body-parser')
var app = express()


app.use(bodyParser.json())

app.set('port', process.env.PORT || 4000);

app.use(router)

export default app