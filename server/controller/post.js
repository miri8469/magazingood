const Magazin = require('../model/magazin');
const User = require('../model/user');
const Post = require('../model/post')

const createPost = async (req, res) => {
    try {
        const newPost = new Post(req.body)
        await newPost.save();
        console.log(newPost);
        const magazin1 = await Magazin.findByIdAndUpdate(req.params.idMagazin, { $push: { posts: newPost._id } }, { new: true })
        res.status(200).json({ magazin: magazin1, newPost: newPost, massage: "create post succesfully" })

    }
    catch (err) {
        res.status(404).json({ err: err.massage })
    }
}
// const deleteMagazin = (req, res) => {
//     Magazin.findOneAndDelete({ name: req.params.name }).then((maga) => {
//         console.log(maga);
//         maga? res.status(200).json({ magazin: maga }):  res.status(400).json({ magazin: maga })
           

//     })
//         .catch(err => { 
//             console.log(err)
//             res.status(500)  })

// }
const getPosts =(req,res)=>{
    Magazin.findById(req.params.id).populate({path: 'posts'} )
    .then(posts => {
        console.log(posts);
        res.status(200).json({post:posts})
    }).catch(err => {
        console.log(err)
        res.status(500).json({err:err})
    })
}
const getPost =(req,res)=>{
    Post.find()
    .then(posts => {
        console.log(posts);
        res.status(200).json({post:posts})
    }).catch(err => {
        console.log(err)
        res.status(500).json({err:err})
    })
}
// const getPost =(req,res)=>{
//     Post.findOne({name: req.body.name})
//     .then(post => {
//         console.log(post);
//         res.status(200).json({post:post})
//     }).catch(err => {
//         console.log(err)
//         res.status(500).json({err:err})
//     })
// }

module.exports = { createPost , getPosts,getPost}