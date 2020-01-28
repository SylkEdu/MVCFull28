import * as mongoose from 'mongoose';

let db: mongoose.Connection = mongoose.createConnection("mongodb://localhost:27017/API_TestMVC", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true,
})

db.on('connected', function (message) {
    console.log("\x1b[3m", "\x1b[33m", "Mongo connected")
    console.log("\x1b[37m", "***********************")
});

db.on('disconnected', function (message) {
    console.log("\x1b[3m", "\x1b[31m", "Mongo not connected")
    console.log("\x1b[37m", "***********************")
});

export default {db}