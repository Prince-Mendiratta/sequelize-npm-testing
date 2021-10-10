const fs = require('fs')
const { DataTypes, Sequelize } = require('sequelize');
require('dotenv').config();
const convertToBool = (value) => {
    var bool = false;
    if (typeof value === "string") {
        if (value.toLowerCase() === "true") {
            bool = true;
        }
    }
    else {

    }
    return bool;
}

// Declare these environment variables first
process.env.DATABASE_URL = process.env.DATABASE_URL === undefined ? './BotsApp.db' : process.env.DATABASE_URL;
process.env.DEBUG = process.env.DEBUG === undefined ? true : false;

const env = {
    DATABASE_URL: process.env.DATABASE_URL,
    DEBUG: process.env.DEBUG,
    DATABASE: process.env.DATABASE_URL === './BotsApp.db' ? new Sequelize({ dialect: "sqlite", storage: process.env.DATABASE_URL, logging: convertToBool(process.env.DEBUG) }) : false,
}
console.log(convertToBool(process.env.DEBUG))
module.exports = env