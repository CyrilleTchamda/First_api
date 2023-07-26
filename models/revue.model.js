const mongoose = require("mongoose");


const revueSchema = mongoose.Schema(
    {
        categorie: {
            type: String,
            required: true,
        },
        reviews:
        [
            {
                title: {
                    type: String,
                    required: true,
                },
                link: {
                    type: String,
                    required: true,
                },
                date: {
                    type: String,
                    required: true,
                },
                description: {
                    type: String,
                    required: true,
                },
            }
        ]
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("revue", revueSchema);
