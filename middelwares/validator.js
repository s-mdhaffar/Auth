const { check, validationResult } = require('express-validator');

exports.registerRules = () => [
	check('fullName', 'This field is required').notEmpty(),
	check('email', 'Email required').notEmpty(),
	check('email', 'This Email is not valid').isEmail(),
	check('password', 'Weak Password minimum 6 characters').isLength({ min: 6 })
];

exports.loginRules = () => [
	check('email', 'This Email is invalid').isEmail(),
	check('password', 'Check your password').isLength({ min: 6 })
];

exports.validator = (req, res, next) => {
	const errors = validationResult(req);
	errors.isEmpty() ? next() : res.status(406).json({ errors: errors.array() });
};
