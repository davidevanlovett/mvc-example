const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../connection/connection");

class User extends Model {};

User.init({

},{

});


module.exports = User;
