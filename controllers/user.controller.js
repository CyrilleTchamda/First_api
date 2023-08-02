const UserModel = require("../models/user.model");


module.exports.getUser = async (req, res) => {
    const user = await UserModel.find();
    res.status(200).json(user);
};

module.exports.getUserOne = async (req, res) => {
    const user = await UserModel.findById(req.params.id);
    res.status(200).json(user);
}; 

module.exports.setUser = async (req, res) => {
    if (!req.body.login) {
        res.status(400).json({ categorie: "Merci d'ajouter un nom" });
    }

    const tv = await UserModel.create({
        login: req.body.login,
        password: req.body.password,
        email: req.body.email,
    });
    res.status(200).json(tv);
};

module.exports.editUser = async (req, res) => {
    const tv = await UserModel.findById(req.params.id);

    if (!tv) {
        res.status(400).json({ title: "Cette revue n'existe pas" });
    }

    const updateTv = await UserModel.findByIdAndUpdate(tv, req.body, {
        new: true,
    });

    res.status(200).json(updateTv);
};