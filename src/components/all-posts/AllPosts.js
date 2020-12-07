import React, {Component} from 'react';
import {PostService} from "../services/PostService";
import Post from "../post/Post";

class AllPosts extends Component {

    state = {posts: []};

    postService = new PostService();

    async componentDidMount() {
        let posts = await this.postService.getAllPosts();
        this.setState({posts})
    };

    render() {
        let {posts} = this.state;
        return (
            <div>
                {posts.map(value => <Post item={value} key={value.id}/>)}
            </div>
        );
    }
}

export default AllPosts;