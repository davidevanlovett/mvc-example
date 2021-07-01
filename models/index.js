const Post = require('./Post');
const Thread = require('./Thread');
const User = require('./User');

User.hasMany(Post);
Post.belongsTo(User);
Thread.hasMany(Post);
Post.belongsTo(Thread);

module.exports = {
	Post, Thread, User
}