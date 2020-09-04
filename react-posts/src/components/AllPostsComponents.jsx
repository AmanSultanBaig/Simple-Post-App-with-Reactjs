import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import axios from 'axios'

const Card = props =>
    (
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.value.title}</h5>
                    <p className="card-text">{props.value.body}</p>
                    <a href="/" className="float-right btn btn-dark">Go somewhere</a>
                </div>
            </div>
        </div>
    )
class AllPostComponent extends Component {

    constructor() {
        super();

        this.state = {
            allPosts: []
        }
    }


    componentDidMount() {
        this.getAllPosts()
    }

    getAllPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(post => this.setState({ allPosts: post.data }))
            .catch(err => console.log(`this error come ${err}`))
    }

    UiGenerate = () => {
        return this.state.allPosts.map((item, i) => {
            return <Card value={item} key={i} />
        })
    }

    render() {
        return (
            <div>
                <a className="btn btn-dark float-right" href="/create-post">+ Add Post</a>
                <div className="row mt-5">
                    {this.UiGenerate()}
                </div>
            </div>
        )
    }
}

export default AllPostComponent