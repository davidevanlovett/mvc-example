const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../connection/connection");

class Post extends Model {};

Post.init({
	body: {
		type: DataTypes.TEXT
	}
},{
	sequelize
});


module.exports = Post;







