const { DataTypes } = require('sequelize');
import {sequelize} from '../config/pgConnection'

const User = sequelize.define('User', {
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    usertype: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

User.sync()

export default {User}