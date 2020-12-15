import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import PlanetService from "../../services/PlanetService";

class FullPlanet extends Component {
    state = {planet: null};
    planetService = new PlanetService();

    componentDidMount() {
        let {planetId} = this.props;
        this.planetService.getPlanetById(planetId)
            .then(value => this.setState({planet: value}))
    }

    render() {
        let {planet} = this.state;
        return (
            <div>
                {planet && <div>{planet.name}-{planet.terrain}</div>}
            </div>
        );
    }
}

export default withRouter(FullPlanet);