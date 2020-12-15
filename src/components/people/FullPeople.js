import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import PeopleService from "../services/PeopleService";

class FullPeople extends Component {
    state = {people: null};
    peopleService = new PeopleService();

    async componentDidMount() {
        let {peopleId} = this.props;
        await this.peopleService.getPlanetById(peopleId)
            .then(value => this.setState({people: value}))
    }

    render() {
        let {people} = this.state;
        return (
            <div>
                {people && <div>{people.name}-{people.hair_color}</div>}
            </div>
        );
    }
}

export default withRouter(FullPeople);