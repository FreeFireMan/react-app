import React, {Component} from 'react';
import AllUsers from "./components/all-users/AllUsers";
import AllPosts from "./components/all-post/AllPosts";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends Component {


    render() {
        return (
            <Router>
                <div>

                    <ul>
                        <li><Link to={`/users`}>Users</Link></li>
                        <li><Link to={`/posts`}>Posts</Link></li>
                    </ul>


                    <Switch>
                        <Route path={`/users`} render={() => <AllUsers/>}/>
                        <Route path={`/posts`} render={() => <AllPosts/>}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;