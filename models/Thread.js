const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../connection/connection");

class Thread extends Model {};

Thread.init({
	title: {
		type: DataTypes.STRING
	}
},{
	sequelize
});


module.exports = Thread;
