const mongoose = require('mongoose');

const connectDB = async () => mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bzz', { useNewUrlParser: true, });

module.exports = connectDB;