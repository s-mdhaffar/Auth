const config = require('config');
const express = require('express');
const connectDB = require('./config/connectdb');
const PORT = config.get('PORT');
const user = require('./routes/user');

const app = express();
app.use(express.json());
app.use('/user', user);
connectDB();

app.listen(PORT, (err) => (err ? console.error(err) : console.log(`Server listening on port ${PORT}`)));
