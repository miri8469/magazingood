const Category = require('../model/categroies');
const Magazin = require('../model/magazin');

const createCategory = async (req, res) => {
    let newCategory = new Category(req.body);

    try {
        await newCategory.save();
        const category = await Magazin.findByIdAndUpdate(req.body._id, { $push: { categoreis: req.body._id} }, { new: true })

        console.log(newCategory);
        
        console.log(category);
        if (newCategory) {
            return res.status(200).json({ category: category, newCategory: newCategory, massage: "create newCategory succesfully" })
        }
        else {
            res.status(404).send('problem on save')
        }

    } catch (err) {
        res.status(404).json({ 'err on save new category': err })
    }

}

module.exports = { createCategory }