const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:123Mudar@@localhost:5432/SequelizeMVC', { logging: false })

console.clear()
console.log("\x1b[37m", "***********************")


try {
    sequelize.authenticate();
    console.log("\x1b[3m", "\x1b[33m", "Postgres connected")
    console.log("\x1b[37m", "***********************")
} catch (error) {
    console.log("\x1b[3m", "\x1b[31m", "Postgres not connected")
    console.log("\x1b[37m", "***********************")
}

export { sequelize }






/*const { Client } = require('pg');

const connectionString = 'postgres://postgres:123Mudar@@localhost:5432/TestApiSQL';

const pg = new Client({
    connectionString: connectionString
});


console.clear()
console.log("\x1b[37m", "***********************")

if (pg.connect()) {
    console.log("\x1b[3m", "\x1b[33m", "Postgres connected")
    console.log("\x1b[37m", "***********************")
} else {
    console.log("\x1b[3m", "\x1b[31m", "Postgres not connected")
    console.log("\x1b[37m", "***********************")
}*/



