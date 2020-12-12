import React, {Component} from 'react';
import PostService from "../services/PostService";
import Post from "../user/Post";

class AllPosts extends Component {
    postService = new PostService();

    state = {posts: [], selectedPost: null};

    selectPost = (id) => {
        this.postService.getPostById(id)
            .then(value => this.setState({selectedPost:value}))
    }

    async componentDidMount() {
        let posts = await this.postService.getAllPost()
        this.setState({posts})
    }

    render() {
        let {posts, selectedPost} = this.state;
        return (
            <div>
                {posts.map(value => <Post item={value} key={value.id} selectPost={this.selectPost}/>)}
                <hr/>
                {selectedPost && <Post item={selectedPost} key={selectedPost.id} isShowBtn={true}/>}
            </div>
        );
    }
}

export default AllPosts;