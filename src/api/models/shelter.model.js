const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shelterSchema = mongoose.Schema(
    {
        name: {type: String, required:true},
        imagen: {type:'String',required: false},
        email: {type: String, required:true},
        password: {type: String, required:true},
        animals: [{type: Schema.Types.ObjectId, ref: 'Animal'}],
    },
    {timestamps:true}
);

const Shelter = mongoose.model('shelter',shelterSchema);

module.exports = Shelter;