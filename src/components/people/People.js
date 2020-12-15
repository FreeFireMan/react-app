import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class People extends Component {

    render() {
        let {item, match: {url}} = this.props;
        return (
            <div>
                Name: {item.name}
                <Link to={`${url}/${item.id}`}>Info</Link>
            </div>
        );
    }
}

export default withRouter(People);