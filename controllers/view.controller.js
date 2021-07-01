const router = require('express').Router();
const { Thread, Post, User } = require('../models');
const SHOULD_LOG = process.env.NODE_ENV === 'develop';

router.get('/', async (req, res) => {
	res.render('home');
});

router.get('/threads', async (req, res) => {
	try {
		const threads = await Thread.findAll({include: Post, logging: SHOULD_LOG});
		const plainThreads = threads.map(thread => thread.get({ plain: true}));
		res.render('threads', {threads: plainThreads});
	}
	catch (err){
		console.error(err);
		res.render('error', {error: SHOULD_LOG ? err : 'Internal Server Error'})
	}
});

router.get('/posts', async (req, res) => {
	try {
		const posts = await Post.findAll({include: Thread, logging: SHOULD_LOG});
		const plainPosts = posts.map(post => post.get({ plain: true}));
		res.render('posts', {posts: plainPosts});
	}
	catch (err){
		console.error(err);
		res.render('error', {error: SHOULD_LOG ? err : 'Internal Server Error'})
	}
});


router.get('/users', async (req, res) => {
	try {
		const users = await User.findAll({include: Post, logging: SHOULD_LOG});
		const plainUsers = users.map(user => user.get({ plain: true}));
		res.render('users', {users: plainUsers});
	}
	catch (err){
		console.error(err);
		res.render('error', {error: SHOULD_LOG ? err : 'Internal Server Error'})
	}
});


module.exports = router;