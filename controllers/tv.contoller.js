const TvModel = require("../models/tv.model");

module.exports.getTv = async (req, res) => {
    const tv = await TvModel.find();
    res.status(200).json(tv);
};

module.exports.getTvOne = async (req, res) => {
    const tv = await TvModel.findById(req.params.id);
    res.status(200).json(tv);
}; 

module.exports.setTv = async (req, res) => {
    if (!req.body.categorie) {
        res.status(400).json({ categorie: "Merci d'ajouter un titre" });
    }

    const tv = await TvModel.create({
        categorie: req.body.categorie,
        title: req.body.title,
        description: req.body.description,
    });
    res.status(200).json(tv);
};

module.exports.editTv = async (req, res) => {
    const tv = await TvModel.findById(req.params.id);

    if (!tv) {
        res.status(400).json({ title: "Cette revue n'existe pas" });
    }

    const updateTv = await TvModel.findByIdAndUpdate(tv, req.body, {
        new: true,
    });

    res.status(200).json(updateTv);
};

module.exports.deleteTv = async (req, res) => {
    const tv = await TvModel.findById(req.params.id);

    if (!tv) {
        res.status(400).json({ title: "Ce post n'existe pas" });
    }
    await tv.remove();
    res.status(200).json("Message supprimé " + req.params.id);
};

module.exports.setTvlink = async (req, res) => {
    try {
        await TvModel.findByIdAndUpdate(
            req.params.id,
            { $addToSet: { links: req.body.link } },
            { new: true }
        ).then((data) => res.status(200).send(data));
    } catch (err) {
        res.status(400).json(err);
    }
};

module.exports.removeTvLink = async (req, res) => {
    try {
        await TvModel.findByIdAndUpdate(
            req.params.id,
            { $pull: {links: req.body.link } },
            { new: true }
        ).then((data) => res.status(200).send(data));
    } catch (err) {
        res.status(400).json(err);
    }
};
