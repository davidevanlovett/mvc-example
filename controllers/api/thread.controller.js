const router = require('express').Router();
const { Thread, Post } = require('../../models');
const SHOULD_LOG = process.env.NODE_ENV === 'develop';

// GET ALL THREADS
router.get('/', async (req, res) => {
	try {
		const threads = await Thread.findAll({include: Post, logging: SHOULD_LOG});
		res.json(threads);
	}
	catch (err){
		console.error(err);
		res.status(500).json(err);
	}
});

// GET ONE THREAD
router.get('/:id', async (req, res) => {
	try {
		const thread = await Thread.findOne({
			where: {
				id: req.params.id
			},
			include: Post,
			logging: SHOULD_LOG
		});
		res.json(thread);
	}
	catch (err){
		console.error(err);
		res.status(500).json(err);
	}
});


// CREATE THREAD
router.post('/', async (req, res) => {
	const thread = req.body;
	try {
		const result = await Thread.create({...thread}, {
			logging: SHOULD_LOG
		});
		res.json(result);
	}
	catch (err){
		console.error(err);
		res.status(500).json(err);
	}
});


// DELETE THREAD
router.delete('/:id', async (req, res) => {
	try {
		const thread = await Thread.destroy({
			where: {
				id: req.params.id
			},
			logging: SHOULD_LOG
		});
		res.json(thread);
	}
	catch (err){
		console.error(err);
		res.status(500).json(err);
	}
});


// UPDATE A THREAD
router.put('/:id', async (req, res) => {
	const thread = req.body;
	try {
		const result = await Thread.update({...thread}, {
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