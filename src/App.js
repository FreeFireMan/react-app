import React, {Component} from 'react';
import AllUsers from "./components/all-users/AllUsers";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AllPosts from "./components/all-posts/AllPosts";
import AllComments from "./components/all-coments/AllComments";


class App extends Component {


    render() {
        return (
            <Router>
                <div>
                    <Link to={`/users`}>All Users</Link>
                    <Link to={`/posts`}>All Posts</Link>
                    <Link to={`/comments`}>All Comments</Link>
                    <hr/>
                    <Switch>
                        <Route path={`/users`} render={() => <AllUsers/>}/>
                        <Route path={`/posts`} render={() => <AllPosts/>}/>
                        <Route path={`/comments`} render={() => <AllComments/>}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;