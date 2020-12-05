import React, {Component} from 'react';
import ViewPost from "../user/ViewPost";

class AllPosts extends Component {

    state = {posts: [], chosenPost: null};

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(value => value.json())
            .then(value => {
                this.setState({posts: value})
            })
    }

    choseThisPost = (id) => {
        let chosenPost = this.state.posts.find(value => value.id === id);
        this.setState({chosenPost})
    }

    render() {
        let {posts, chosenPost} = this.state;
        return (
            <div>
                {
                    posts.map(posts => <ViewPost item={posts} key={posts.id}
                                                 choseThisPost={this.choseThisPost}/>)
                }
                <hr/>
                {
                    chosenPost && <ViewPost item={chosenPost}/>
                }

            </div>
        );
    }
}

export default AllPosts;