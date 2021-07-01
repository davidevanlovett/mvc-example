const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../connection/connection");

class Thread extends Model {};

Thread.init({

},{

});


module.exports = Thread;
