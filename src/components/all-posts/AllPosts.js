import React, {Component} from 'react';
import {PostService} from "../services/PostService";
import Post from "../post/Post";

class AllPosts extends Component {
    postService = new PostService();
    
    state ={posts:[],selectedPost:null,};
    
componentDidMount() {
    this.postService.getAllPosts().then(value => this.setState({posts: value}));
};
selectPost = (id)=>this.postService.getPostById(id).then(value => this.setState({selectedPost:value}));


    render() {
        let {posts,selectedPost} = this.state;
        return (
            <div>
                {
                    posts.map(value => <Post item={value} key={value.id} selectPost={this.selectPost}/>)
                }
                <hr/>
                {
                   selectedPost && <Post item={selectedPost} isShowBtn={true} />
                }
            </div>
        );
    }
}

export default AllPosts;