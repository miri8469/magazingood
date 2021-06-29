import { connect } from "react-redux"
import React, { useEffect, useState } from "react"
import produce from "immer";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import actions from '../redux/actions'
import Modal from 'react-bootstrap/Modal'


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

export default connect(mapStateToProps)(function SignUp(props) {
    const { loged,setLoged } = props
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <>
            <Modal
                show={loged}
                onHide={() => setLoged(false)}
                backdrop="static"
                keyboard={false}

            >
                <Modal.Header closeButton>
                    <Modal.Title>SignUp</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <div className="container">
                        <div className="row">
                            <label >FullName</label>
                            <input id="inputFName" className="form-control" type="text" onChange={(e) => { setName(e.target.value) }}></input>
                        </div >
                        <div className="row">
                            <label >Email</label>
                            <input id="inputEmail" className="form-control" type="email" onChange={(e) => { setEmail(e.target.value) }}></input>
                        </div>

                        <div className="row">
                            <label htmlFor="inputPass" >Password</label>
                            <input id="inputPass" className="form-control" type="password" onChange={(e) => { setPassword(e.target.value) }}></input>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setLoged(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { }}>Create Account</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
})




