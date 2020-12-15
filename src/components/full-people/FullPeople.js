import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

class FullPeople extends Component {
    state = {people: null};

    componentDidMount() {
        console.log(this.props);
        let {peopleId} = this.props;
        fetch('https://swapi.dev/api/people/' + peopleId + `/`)
            .then(value => value.json())
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