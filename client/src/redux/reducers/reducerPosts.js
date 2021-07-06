import React from 'react'
import { produce } from 'immer'
import execHandler from '../reducerUtils'
// import pic1 from '../pictures/pic1.jpg'
import pic1 from '../../pictures/Pic1.jpg'


const inisualState = {
    posts:[]
    // posts: [{ name: "firsPost", title: "magazinPost1", descripthion: "rgrsvbrcbdjbhDHC", image: pic1 },
    // { name: "secondPost", title: "magazinPost2", descripthion: "rgrsvbrcbdjbhDHC", image: pic1 },
    // { name: "secondPost", title: "magazinPost2", descripthion: "rgrsvbrcbdjbhDHC", image: pic1 },
    // { name: "secondPost", title: "magazinPost2", descripthion: "rgrsvbrcbdjbhDHC", image: pic1 }]
}

const posts = {
    createPosts(state, action) {
        debugger
        state.posts.push(action.payload);
    },
    getPosts(state, action) {
        debugger
        state.posts = action.payload
    }

}

export default produce((state, action) => execHandler(state, action, posts), inisualState)