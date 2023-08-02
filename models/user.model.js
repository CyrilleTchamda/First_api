const mongoose = require("mongoose");
const { isEmail } = require('validator');

const userSchema = mongoose.Schema(
    {
        login: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            validate: [isEmail],
        },
        password: {
            type: String,
            required: true,
        },
        connected: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("user", userSchema);
