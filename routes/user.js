const express = require('express');
const { validationResult } = require('express-validator');
const { register, login, auth } = require('../controllers/user.controller');
const { registerRules, validator, loginRules } = require('../middelwares/validator');
const verifyAuth = require('../middelwares/verifyAuth');

const router = express.Router();

router.post('/register', registerRules(), validator, register);
router.post('/login', loginRules(), validator, login);
router.get('/auth', verifyAuth, auth);

module.exports = router;
