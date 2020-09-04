import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class CreatePostComponent extends Component {

    constructor() {
        super();

        this.state = {
            title: "",
            body: ""
        }
    }

    changeStateHandler = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    addPost = (e) => {
        console.log(this.state)
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.addPost}>
                <div className="row mt-5">
                    <div className="col-md-12">
                        <label>Post Title</label>
                        <input name="title" type="text" onChange={this.changeStateHandler} className="form-control" placeholder="Title e.g Post Name" value={this.state.value} />
                    </div>
                    <div className="col-md-12 mt-3">
                        <label>Post Description</label>
                        <textarea name="body" onChange={this.changeStateHandler} placeholder="Description e.g Something about what you post" rows="4" className="form-control" value={this.state.value}></textarea>
                    </div>
                    <div className="col mt-4">
                        <button className="float-right btn btn-dark">Add Post</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default CreatePostComponent