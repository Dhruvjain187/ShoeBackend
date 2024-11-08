const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    // salt: {
    //     type: String,
    //     select: fal
    // }, // Remove select: false if present
    // hash: {
    //     type: String,
    //     select: true
    // }
})

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);
module.exports = User;