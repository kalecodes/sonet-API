const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// add prefix of /users to routes
router.use('/users', userRoutes);
// add prefix of /thoughts to routes
router.use('/thoughts', thoughtRoutes);


module.exports = router;