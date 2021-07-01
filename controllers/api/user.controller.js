const router = require('express').Router();
const { User } = require('../../models');
const SHOULD_LOG = process.env.NODE_ENV === 'develop';

// GET ALL USERS
router.get('/', async (req, res) => {
	try {
		const users = await User.findAll({logging: SHOULD_LOG});
		res.json(users);
	}
	catch (err){
		console.error(err);
		res.status(500).json(err);
	}
});

// GET ONE USER
router.get('/:id', async (req, res) => {
	try {
		const user = await User.findOne({
			where: {
				id: req.params.id
			},
			logging: SHOULD_LOG
		});
		res.json(user);
	}
	catch (err){
		console.error(err);
		res.status(500).json(err);
	}
});


// CREATE USER
router.post('/', async (req, res) => {
	const user = req.body;
	try {
		const result = await User.create({...user}, {
			logging: SHOULD_LOG
		});
		res.json(result);
	}
	catch (err){
		console.error(err);
		res.status(500).json(err);
	}
});


// DELETE USER
router.delete('/:id', async (req, res) => {
	try {
		const user = await User.destroy({
			where: {
				id: req.params.id
			},
			logging: SHOULD_LOG
		});
		res.json(user);
	}
	catch (err){
		console.error(err);
		res.status(500).json(err);
	}
});


// UPDATE A USER
router.put('/:id', async (req, res) => {
	const user = req.body;
	try {
		const result = await User.update({...user}, {
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