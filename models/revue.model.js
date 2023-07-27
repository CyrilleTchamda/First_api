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
                picture: {
                    type: String,
                    default: "profile_1690449104933.png"
                },
            }
        ]
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("revue", revueSchema);
