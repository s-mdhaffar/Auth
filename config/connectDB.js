const config = require('config');
const mongoose = require('mongoose');
const db = config.get('db');

const connectDB = async () => {
	try {
		await mongoose.connect(db);
		console.log('Database Connected');
	} catch (error) {
		console.log(error);
	}
};

module.exports = connectDB;
