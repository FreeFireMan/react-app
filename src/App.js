import React, {Component} from 'react';
import AllUsers from "./components/all-user/AllUsers";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
            <div>
                <Link to={`/users`}>Users</Link>
                <hr/>
                <Switch>
                    <Route path={`/users`} render={()=> <AllUsers/>}/>
                </Switch>
            </div>
            </Router>
        );
    }
}

export default App;