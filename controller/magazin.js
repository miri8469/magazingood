const Magazin = require('../model/magazin');
const User = require('../model/user');

const createMagazin = async (req, res) => {
    const newMagazin = new Magazin(req.body)
    try {
        const user = await User.findOne({ name: req.params.userName })
        newMagazin.userId = user._id
        await newMagazin.save();
        console.log(newMagazin);
        const user1 = await User.findOneAndUpdate({ name: req.params.userName }, { $push: { magazins: newMagazin._id } }, { new: true })
        return res.status(200).json({ user: user1, newMagazin: newMagazin, massage: "create magazin succesfully" })
    }
    catch (err) {
        return res.status(500).json({ err: err.massage })
    }
}
module.exports = { createMagazin }