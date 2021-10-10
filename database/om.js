const config = require('../config')
const { Sequelize, Model, DataTypes } = require('sequelize');
const seq = config.DATABASE;

const Ghar = seq.define('Ghar', {
    name: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT
    }
});

module.exports = {
    Ghar: Ghar
}