const router = require('express').Router();
const { Post } = require('../../models');

// GET ALL POSTS
router.get('/', async (req, res) => {
	try {
		const posts = await Post.findAll({});
		res.json(posts);
	}
	catch (err){
		console.error(err);
		res.status(500).json(err);
	}
});

// GET ONE POST
router.get('/:id', (req, res) => {
	try {
		const post = await Post.findOne({
			where: {
				id: req.params.id
			}
		});
		res.json(post);
	}
	catch (err){
		console.error(err);
		res.status(500).json(err);
	}
});


// CREATE POST
router.post('/', (req, res) => {
	const post = req.body;
	try {
		const result = await Post.create({...post});
		res.json(result);
	}
	catch (err){
		console.error(err);
		res.status(500).json(err);
	}
});


// DELETE POST
router.delete('/:id', (req, res) => {
	try {
		const post = await Post.destroy({
			where: {
				id: req.params.id
			}
		});
		res.json(post);
	}
	catch (err){
		console.error(err);
		res.status(500).json(err);
	}
});


// UPDATE A POST
router.put('/:id', (req, res) => {
	const post = req.body;
	try {
		const result = await Post.update({...post}, {
			where: {
				id: req.params.id
			}
		});
		res.json(result);
	}
	catch (err){
		console.error(err);
		res.status(500).json(err);
	}
});

module.exports = router;