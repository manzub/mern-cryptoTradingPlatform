const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.user = require("./User");
db.services = require("./Services")
db.chats = require("./Chat");
// Add more types later
db.TransactionTypes = { trade: 'trade' };
module.exports = db;