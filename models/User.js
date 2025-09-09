const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nombre: String,
  correo: String
});

module.exports = mongoose.model('User', userSchema);