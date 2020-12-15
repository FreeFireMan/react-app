import React, {Component} from 'react';
import PlanetService from "../services/PlanetService";
import Planet from "./Planet";
import {Route, withRouter} from "react-router-dom";
import FullPlanet from "./FullPlanet";

class AllPlanets extends Component {
    state = {planets: []};
    planetService = new PlanetService();

    componentDidMount() {
        this.planetService.getAllPlanets()
            .then(value => this.setState({planets: value.results}))
    }

    render() {
        let {planets} = this.state;
        let {match: {url}} = this.props;
        return (
            <div>
                {planets.map((value, index) => {
                    value.id = index + 1;
                    return <Planet item={value} key={value.id}/>
                })}
                <hr/>
                <Route path={`${url}/:id`} render={(props) => {
                    let {match: {params: {id}}} = props;
                    return <FullPlanet planetId={id} key={id}/>
                }}/>
            </div>
        );
    }

}

export default withRouter(AllPlanets);