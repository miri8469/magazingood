const Admin = require('../model/admin')
const User = require('../model/user')
const jwt = require('jsonwebtoken')

const addAdmin = (req, res) => {
    const admin = new Admin(req.body)
    admin.save().then((admin) => {
        console.log('admin added!');
        res.json({ admin1: admin })
    }).catch(err => {
        console.log('error, not added', err);
    })
}
const deleteUserByAdmin = (req, res) => {
    console.log(req.params.userId);
    User.findByIdAndDelete(req.params.userId).then(user => {
        console.log(user);
        Admin.findByIdAndUpdate(user.adminId, { $pull: { 'userId': user._id } }).then(() => {
            console.log('user deleted!');
            res.json({ user: user });
        })
    })
}
const loginAdmin = (req, res) => {

    Admin.findById(req.params.id).then(admin => {
        console.log(admin, 'admin excist in the DB');
        let token = jwt.sign({ admin: admin.name, password: admin.password }, process.env.SECRET)
        res.send({ admin: admin, token: token })

    }).catch(err => {
        console.log('admin no excist in DB', err);
    })
}
const getAllUserByAdmin = (req, res) => {
    Admin.findById(req.params.adminId).populate({ path: 'userId', select: '_id' }).then(AdminUsers=>{
        console.log(AdminUsers);
        res.json({Admin:AdminUsers})
    }).catch(err=>{
        console.log('err');
    })
}

module.exports = { addAdmin, deleteUserByAdmin, loginAdmin,getAllUserByAdmin }