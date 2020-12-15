import React, {Component} from 'react';
import StarshipService from "../services/StarshipService";
import Starship from "./Starship";
import {Route, withRouter} from "react-router-dom";
import FullStarships from "./FullStarships";

class AllStarships extends Component {
    state = {starships: []};
    starshipService = new StarshipService();

    async componentDidMount() {
        let starships = await this.starshipService.getStarships();
        this.setState({starships});
    }

    render() {
        let {starships} = this.state;
        let {match: {url}} = this.props;
        return (
            <div>
                {starships.map((value, index) => {
                    value.id = index + 1;
                    return <Starship item={value} key={value.id}/>
                })}
                <hr/>
                <Route path={`${url}/:id`} render={(props) => {
                    let {match: {params: {id}}} = props;
                    return <FullStarships starshipId={id} key={id}/>
                }}/>
            </div>
        );
    }

}

export default withRouter(AllStarships);