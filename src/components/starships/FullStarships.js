import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import StarshipService from "../services/StarshipService";

class FullStarships extends Component {
    state = {starship: null};
    starshipService = new StarshipService();

    async componentDidMount() {
        let {starshipId} = this.props;
        let starship = await this.starshipService.getStarshipById(starshipId);
        this.setState({starship});
    }

    render() {
        let {starship} = this.state;
        return (
            <div>
                {starship && <div>{starship.name}-{starship.model}</div>}
            </div>
        );
    }
}

export default withRouter(FullStarships);