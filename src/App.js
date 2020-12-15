import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import AllPeople from "./components/all-people/AllPeople";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to={`/peoples`}>Peoples</Link>
                </div>
                <Switch>
                    <Route path={`/peoples`} render={() =>
                        <AllPeople/>
                    }/>
                </Switch>
            </Router>
        );
    }
}

export default App;