var express = require('express');
var router = express.Router();
const authController = require('../controllers/authController');

/* GET home page. */
router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);
router.get('/dashboard', authController.getDashboard);
router.get('/logout', authController.logout);



module.exports = router;