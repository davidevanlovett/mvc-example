require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB ?
	new Sequelize(process.env.JAWSDB) :
	new Sequelize(process.env.DB_NAME,
		process.env.DB_USER,
		process.env.DB_PASSWORD,
		{
			host: 'localhost',
			port: 3306,
			dialect: 'mysql'
		});

module.exports = sequelize;