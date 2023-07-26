const RevueModel = require("../models/revue.model");

module.exports.getRevues = async (req, res) => {
    const revues = await RevueModel.find();
    res.status(200).json(revues);
};

module.exports.getRevuesOne = async (req, res) => {
    const revues = await RevueModel.findById(req.params.id);
    res.status(200).json(revues);
}; 

module.exports.setRevues = async (req, res) => {
    if (!req.body.categorie) {
        res.status(400).json({ categorie: "Merci d'ajouter un titre" });
    }

    const revue = await RevueModel.create({
        categorie: req.body.categorie,
    });
    res.status(200).json(revue);
};

module.exports.editRevue = async (req, res) => {
    const revue = await RevueModel.findById(req.params.id);

    if (!revue) {
        res.status(400).json({ title: "Cette revue n'existe pas" });
    }

    const updateRevue = await RevueModel.findByIdAndUpdate(revue, req.body, {
        new: true,
    });

    res.status(200).json(updateRevue);
};

module.exports.deleteRevue = async (req, res) => {
    const revue = await RevueModel.findById(req.params.id);

    if (!revue) {
        res.status(400).json({ title: "Ce post n'existe pas" });
    }
    await revue.remove();
    res.status(200).json("Message supprimé " + req.params.id);
};

module.exports.setRevuesPost = async (req, res) => {
    try {
        await RevueModel.findByIdAndUpdate(
            req.params.id,
            { $addToSet: { reviews: {
                title: req.body.title,
                description: req.body.description,
                link: req.body.link,
                date: req.body.date,
            } } },
            { new: true }
        ).then((data) => res.status(200).send(data));
    } catch (err) {
        res.status(400).json(err);
    }
};

module.exports.removeRevuesPost = async (req, res) => {
    try {
        await RevueModel.findByIdAndUpdate(
            req.params.id,
            { $pull: { reviews: { _id: req.params.idPost } } },
            { new: true }
        ).then((data) => res.status(200).send(data));
    } catch (err) {
        res.status(400).json(err);
    }
};


module.exports.updateRevuesPost = async (req, res) => {
    try {
        await RevueModel.updateOne(
            {_id: req.params.id, 'reviews._id': req.params.idPost},
            { $set: { 
                'reviews.$.date': req.body.date,
                'reviews.$.title': req.body.title,
                'reviews.$.link': req.body.link,
                'reviews.$.description': req.body.description,
            } },
            { new: true }
        ).then((data) => res.status(200).send(data));
    } catch (err) {
        res.status(400).json(err);
    }
};

