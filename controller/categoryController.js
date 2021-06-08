const Category = require('../model/categroies');
const Magazin = require('../model/magazin')
const creatCategory = async (req, res) => {

    const newCategory = new Category(req.body);
    try {
        await newCategory.save();
        console.log(newCategory);
        try {
            const category = await Magazin.findByIdAndUpdate(req.params.magazinId, { $push: { categoreis: newCategory._id } }, { new: true })
            res.status(200).json({ newCategory: newCategory, updateCategory: category });
        } catch (err) {
            res.status(500).json({ err: err });
            console.log(err);
        }

    }
    catch (err) {
        res.status(500).json({ err: err, massage: 'problem in creatCategory' });
        console.log(err);
    }

}



module.exports = { creatCategory }