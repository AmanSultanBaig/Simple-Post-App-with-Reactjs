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
            <div className="container">
                <div className="row">
                    <h3 className="mt-3">{this.state.onePost.title}</h3>
                    <div className="col-md-10">
                        <p className="mt-1">{this.state.onePost.body}</p>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-dark btn-sm">Delete Post</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewPost