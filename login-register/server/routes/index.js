const express = require('express');
const router = express.Router();
const userRoutes = require('./user-routes');
const useForm = require('./rdv-routes');
const useProfile = require('./profile-route');



router.use('/user', userRoutes);
router.use('/form', useForm);
router.use('/profile', useProfile);


module.exports = router;