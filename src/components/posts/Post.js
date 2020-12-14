import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

class Post extends Component {
    state = {posts: []};

    componentDidMount() {
        let {userId} = this.props;
        fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
            .then(value => value.json())
            .then(value => this.setState({posts:value}))
    }

    render() {
        let {posts} = this.state;
        return (
            <div>
                {posts.map(value => <div key={value.id}>{value.id} {value.title}</div>)}
            </div>
        );
    }
}

export default withRouter(Post);