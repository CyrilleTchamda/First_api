const mongoose = require("mongoose");

const tvSchema = mongoose.Schema(
    {
        categorie: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        links:{
            type: [String]
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("tv", tvSchema);
