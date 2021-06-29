import axios from 'axios'

export const ServicePosts = ({ dispatch, getState }) => next => action => {

    if (action.type === "CREATE_POSTS") {
        return new Promise((resolve, reject) => {
            console.log("im at createpost middelware")
            axios.post("http://localhost:9000/addUser", action.payload)
                .then((res) => {
                    console.log("res")
                    console.log(res)
                    let user = { ...res.data.user }
                    action.payload = user
                    if (user._id != null) {
                        resolve(true)
                        return next(action)
                    }
                    else
                        reject(false)
                }
                ).catch(err => {
                    resolve(false)
                })
        })
    }
    next(action)
    // if (action.type === "GET_POSTS") {
    //     return new Promise((resolve, reject) => {
    //         console.log("im at createpost middelware")
    //         axios.post("http://localhost:9000/addUser", action.payload)
    //             .then((res) => {
    //                 console.log("res")
    //                 console.log(res)
    //                 let user = { ...res.data.user }
    //                 action.payload = user
    //                 if (user._id != null) {
    //                     resolve(true)
    //                     return next(action)
    //                 }
    //                 else
    //                     reject(false)
    //             }
    //             ).catch(err => {
    //                 resolve(false)
    //             })
    //     })
    // }
    // next(action)
}

