const router = require('express').Router();

const postRoutes = require('./post.controller');
const threadRoutes = require('./thread.controller');
const userRoutes = require('./user.controller');

router.use('/posts', postRoutes);
router.use('/threads', threadRoutes);
router.use('/users', userRoutes);

module.exports = router;