const router = require('express').Router();
const { Post, User } = require('../../models');
const SHOULD_LOG = process.env.NODE_ENV === 'develop';

// GET ALL POSTS
router.get('/', async (req, res) => {
	try {
		const posts = await Post.findAll({include: User, logging: SHOULD_LOG});
		res.json(posts);
	}
	catch (err){
		console.error(err);
		res.status(500).json(err);
	}
});

// GET ONE POST
router.get('/:id', async (req, res) => {
	try {
		const post = await Post.findOne({
			where: {
				id: req.params.id
			},
			include: User, 
			logging: SHOULD_LOG
		});
		res.json(post);
	}
	catch (err){
		console.error(err);
		res.status(500).json(err);
	}
});


// CREATE POST
router.post('/', async (req, res) => {
	const post = req.body;
	try {
		const result = await Post.create({...post}, {
			logging: SHOULD_LOG
		});
		res.json(result);
	}
	catch (err){
		console.error(err);
		res.status(500).json(err);
	}
});


// DELETE POST
router.delete('/:id', async (req, res) => {
	try {
		const post = await Post.destroy({
			where: {
				id: req.params.id
			},
			logging: SHOULD_LOG
		});
		res.json(post);
	}
	catch (err){
		console.error(err);
		res.status(500).json(err);
	}
});


// UPDATE A POST
router.put('/:id', async (req, res) => {
	const post = req.body;
	try {
		const result = await Post.update({...post}, {
			where: {
				id: req.params.id
			},
			logging: SHOULD_LOG
		});
		res.json(result);
	}
	catch (err){
		console.error(err);
		res.status(500).json(err);
	}
});

module.exports = router;