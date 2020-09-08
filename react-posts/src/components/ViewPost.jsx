import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

class ViewPost extends Component {

    constructor() {
        super();

        this.state = {
            onePost: []
        }
    }

    componentDidMount() {
        this.viewPostById()
    }

    viewPostById() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.postId}`)
            .then(post => {
                this.setState({ onePost: post.data })
                console.log(this.state.onePost)
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            // <h1>aaa</h1>
            <div className="container">
                <div className="row">
                    <h3 className="mt-3">{this.state.onePost.title}</h3>
                    <p className="mt-1 w-75">{this.state.onePost.body}</p>
                </div>
            </div>
        )
    }
}

export default ViewPost