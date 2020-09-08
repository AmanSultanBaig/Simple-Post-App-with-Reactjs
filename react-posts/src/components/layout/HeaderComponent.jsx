import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';


import AllPostComponent from '../AllPostsComponents'
import CreatePostComponent from '../CreatePostComponent'
import ViewPost from '../ViewPost';

function HeaderComponent() {
    return (
        <Router>
            <div className="container">
                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand" href="/all-posts">
                        <span style={{ fontWeight: '800' }}>USERLIST With REACT JS</span>
                    </a>
                </nav>
                <Route path="/" exact component={AllPostComponent} />
                <Route path="/all-posts" exact component={AllPostComponent} />
                <Route path="/create-post" component={CreatePostComponent} />
                <Route path="/view-post/:postId" component={ViewPost} />
            </div>
        </Router>
    );
}

export default HeaderComponent;
