import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import AllPeople from "./components/people/AllPeople";
import AllPlanets from "./components/planets/AllPlanets";
import AllStarships from "./components/starships/AllStarships";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to={`/peoples`}>Peoples</Link>
                    <br/>
                    <Link to={`/planets`}>Planets</Link>
                    <br/>
                    <Link to={`/starships`}>Starships</Link>
                </div>
                <Switch>
                    <Route path={`/peoples`} render={() =>
                        <AllPeople/>
                    }/>
                    <Route path={`/planets`} render={() =>
                        <AllPlanets/>}/>
                    <Route path={`/starships`} render={() =>
                        <AllStarships/>
                    }/>
                </Switch>
            </Router>
        );
    }
}

export default App;