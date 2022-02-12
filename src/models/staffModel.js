const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const staffSchema = new Schema({

    staffId:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    address:{
       type:String,
       required:true
    },
    tel:{
        type:String,
        required:true
    }

},{
    timestamps:true
});

staffSchema.methods.hashPassword = async (password) => {
    return await bcrypt.hashSync(password, 10);
}
staffSchema.methods.compareUserPassword = async (inputtedPassword, hashedPassword) => {
    return await bcrypt.compare(inputtedPassword, hashedPassword)
}
staffSchema.methods.generateJwtToken = async (payload, secret, expires) => {
    return jwt.sign(payload, secret, expires)
}

module.exports = mongoose.model("Staff", staffSchema);
staffSchema.plugin(uniqueValidator, {
    message: '{PATH} Already in use'
});

