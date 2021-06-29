const Magazin = require('../model/magazin');
const User = require('../model/user');

const createMagazin = async (req, res) => {
    try {
        const newMagazin = new Magazin(req.body)
        await newMagazin.save();
        console.log(newMagazin);
        const user1 = await User.findByIdAndUpdate(req.params.idUser, { $push: { magazins: newMagazin._id } }, { new: true })
        res.status(200).json({ user: user1, newMagazin: newMagazin, massage: "create magazin succesfully" })

    }
    catch (err) {
        res.status(404).json({ err: err.massage })
    }
}
const deleteMagazin = (req, res) => {
    Magazin.findOneAndDelete({ name: req.params.name }).then((maga) => {
        console.log(maga);
        maga ? res.status(200).json({ magazin: maga }) : res.status(400).json({ magazin: maga })


    })
        .catch(err => {
            console.log(err)
            res.status(500)
        })

}
const findMagazin =(req,res)=>{
    Magazin.findOne({name: req.body.name})
    .then(magazin => {
        console.log(magazin);
        res.status(200).json({magazin:magazin})
    }).catch(err => {
        console.log(err)
        res.status(500).json({err:err})
    })
}
module.exports = { createMagazin, deleteMagazin ,findMagazin}