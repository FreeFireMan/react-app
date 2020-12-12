import React, {Component} from 'react';
import PostService from "../services/PostService";
import Post from "../post/Post";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import FullPost from "../full-post/FullPost";

class AllPosts extends Component {
    state = {posts: []};
    postService = new PostService();

    async componentDidMount() {
        let posts = await this.postService.getAllPost();
        this.setState({posts});
    }

    render() {
        let {posts} = this.state;
        let {match: {url}} = this.props;
        return (
            <div>
                {
                    posts.map(value => <Post item={value} key={value.id}/>)
                }
                <hr/>
                <Switch>
                    <Route path={`${url}/:id`} render={(props) => {
                        let {match: {params: {id}}} = props;
                        return <FullPost item={id} key={id}/>
                    }}/>
                </Switch>
                <hr/>
            </div>
        );
    }

}

export default withRouter(AllPosts);