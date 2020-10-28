const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lobbySchema = Schema({
    username: {type: String, required: true},
    platform: {type: String, required: true}
})

const Lobby = mongoose.model('Lobby',lobbySchema)

module.exports = Lobby;
