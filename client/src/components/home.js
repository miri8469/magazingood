import { connect } from "react-redux"
import React, { useEffect, useState } from "react"
import produce from "immer";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import actions from '../redux/actions'
import SignUp from "./signUp";

function mapStateToProps(state) {
    //debugger
    return {
        posts: state.reducerPost.posts
    };
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         getPosts: () => dispatch(actions.getPosts()),
//     }
// } 

export default connect(mapStateToProps)(function Home(props) {
    const { posts } = props
    const [loged, setLoged] = useState(false)

    // function toSignUp() {
    //     setLoged(true)
    // }

    return (
        <>
            <Button variant="info" onClick={() => { setLoged(true) }}>
                SignUp
            </Button>
            <SignUp loged={loged} setLoged={setLoged}></SignUp>
        </>
    )
})