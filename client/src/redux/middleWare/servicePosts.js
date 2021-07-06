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
 else

    if (action.type === "GET_POSTS") {
        return new Promise((resolve, reject) => {
            console.log("im at getepost middelware")
            debugger
            const name = "photograph";
            action.payload = {name}
            axios.get("http://localhost:3007/getPost")
                .then((res) => {
                    debugger
                    console.log("res")
                    console.log(res)
                    let posts = [ ...res.data.post ]
                    action.payload = posts
                    if (posts!= null) {
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
}

