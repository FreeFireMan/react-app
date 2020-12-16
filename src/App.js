import React, {Component} from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import AllPeople from "./components/people/AllPeople";
import AllPlanets from "./components/planets/AllPlanets";
import AllStarships from "./components/starships/AllStarships";
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink to={`/peoples`}>Peoples</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/planets`}>Planets</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/starships`}>Starships</NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route path={`/peoples`} component={AllPeople}/>
                    <Route path={`/planets`} component={AllPlanets}/>
                    <Route path={`/starships`} component={AllStarships}/>
                </Switch>
            </div>
        );
    }
}

export default App;
