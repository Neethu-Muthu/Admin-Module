const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    uId: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true
    }
});

const AdminUser = mongoose.model('AdminUser', userSchema);

module.exports = AdminUser;
