import { connect } from "react-redux"
import React, { useEffect } from "react"
import produce from "immer";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import actions from '../redux/actions'

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

export default connect(mapStateToProps)(function Post(props) {
    const { posts } = props
    let date = new Date()

    useEffect(() => {
        // getPosts()
    }, [])
    return (
        <>

            <div class="container">
                <div class="row" style={{ diplay: 'flex' }}>
                    {posts &&
                        posts.map(post => (
                            <div class="col-sm-4">

                                <Card style={{ width: '15rem', margin: "5vh" }}>
                                    <Card.Img variant="top" src={post.image} />
                                    <Card.Body>
                                        {date.toLocaleTimeString()}
                                        <Card.Title>{post.title}</Card.Title>
                                        <Card.Text>{post.descripthion}
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))
                    }

                </div>
            </div>

        </>
    )
})