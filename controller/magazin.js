const Magazin = require('../model/magazin');
const User = require('../model/user');

const createMagazin = async (req, res) => {
    const newMagazin = new Magazin(req.body)

    try {
        await newMagazin.save();
        console.log(newMagazin);
        try {
            const user1 = await User.findByIdAndUpdate(req.body.idUser, { $push: { magazins: newMagazin._id } }, { new: true })
            return res.status(200).json({ user: user1, newMagazin: newMagazin, massage: "create magazin succesfully" })
        }
        catch (err) {
            return res.status(404).json({ err: err.message })
        }
    }
    catch (err) {
        return res.status(404).json({ err: err.massage })
    }
}
module.exports = { createMagazin }