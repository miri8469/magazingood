const Post = require('../model/post');


const createPost = async (req, res) => {

    const newPost = new Post(req.body);
    try {

    }
    catch (err) {

    }

}

module.exports = { createPost }


