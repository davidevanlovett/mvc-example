const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../connection/connection");
const bcrypt = require('bcrypt');

class User extends Model {
	checkPassword(pw){
		return bcrypt.compareSync(pw, this.password)
	}
};

User.init({
	email: {
		type: DataTypes.STRING,
		allowNull: false
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	}
},{
	sequelize,
	hooks: {
		async beforeCreate(user){
			user.password = await bcrypt.hash(user.password, 10);
			return user;
		},
		async beforeUpdate(user){
			user.password = await bcrypt.hash(user.password, 10);
			return user;
		}
	}
});


module.exports = User;
