const mongoose = require('mongoose');

const signupUserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    useremail: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const SignupUser = mongoose.model('SignupUser', signupUserSchema);

module.exports = SignupUser;
