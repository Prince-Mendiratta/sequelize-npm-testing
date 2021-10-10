const { Sequelize, Model, DataTypes } = require('sequelize');
const config = require('./config')
const modsels = require('./database/campus')

const sequelize = config.DATABASE;

async function bruh(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    await sequelize.sync({alter: true});
    console.log(sequelize.models);
    // const yash = await models.Campus.create({name: "Yash", address: "Gdahasr", description: "lmao"});
    await sequelize.close();
    console.log('Connection has been closed successfully.');
}

bruh()