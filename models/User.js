const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../connection/connection");

class User extends Model {};

User.init({
	email: {
		type: DataTypes.STRING
	},
	password: {
		type: DataTypes.STRING
	}
},{
	sequelize
});


module.exports = User;
