import React, {Component} from 'react';
import PeopleService from "../services/PeopleService";
import People from "../people/People";
import {Route, withRouter} from "react-router-dom";
import FullPeople from "../full-people/FullPeople";

class AllPeople extends Component {
    state = {people: []};
    peopleService = new PeopleService();

    componentDidMount() {
        fetch('https://swapi.dev/api/people')
            .then(value => value.json())
            .then(value => this.setState({people: value.results}))
    };

    render() {

        let {people} = this.state;
        people.forEach((value, index) => value.id = index + 1);
        let {match: {url}} = this.props;
        return (
            <div>
                {people.map(value => <People item={value} key={value.id}/>)}
                <hr/>
                <Route path={`${url}/:id`} render={(props) => {
                    let {match: {params: {id}}} = props;
                    return <FullPeople peopleId={id} key={id}/>
                }}/>
            </div>
        );
    }

}

export default withRouter(AllPeople);