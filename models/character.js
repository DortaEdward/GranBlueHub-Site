const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const characterSchema = new Schema({
    name: {type: String, require: true},
    img: {type: String, require:true},
    description: {type:String, require:true},
    combos: {type:String, require:true},
    link: {type:String, require:true}
})

const Character = mongoose.model('Character',characterSchema);
module.exports = Character;
