const router = require('express').Router();
const { Thread, Post, User } = require('../models');
const SHOULD_LOG = process.env.NODE_ENV === 'develop';


router.get('/', async (req, res) => {
	try {
		const threads = await Thread.findAll({ include: Post, logging: SHOULD_LOG });
		const plainThreads = threads.map(thread => thread.get({ plain: true }));
		res.render('home', { threads: plainThreads });
	}
	catch (err) {
		console.error(err);
		res.render('error', { error: SHOULD_LOG ? err : 'Internal Server Error' })
	}
});

router.get('/threads/:id', async (req, res) => {
	try {
		const thread = await Thread.findOne({
			where: {
				id: req.params.id
			},
			include: [{
				model: Post, 
				include: {
					model: User
				}
			}], logging: SHOULD_LOG
		});
		const plainThread = thread.get({ plain: true });
		res.render('thread', { thread: plainThread, posts: plainThread.Posts });
	}
	catch (err) {
		console.error(err);
		res.render('error', { error: SHOULD_LOG ? err : 'Internal Server Error' })
	}
});

router.get('/users', async (req, res) => {
	try {
		const users = await User.findAll({ include: Post, logging: SHOULD_LOG });
		const plainUsers = users.map(user => user.get({ plain: true }));
		res.render('users', { users: plainUsers });
	}
	catch (err) {
		console.error(err);
		res.render('error', { error: SHOULD_LOG ? err : 'Internal Server Error' })
	}
});


module.exports = router;