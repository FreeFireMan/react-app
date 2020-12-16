import React, {Component} from 'react';
import {NavLink, withRouter} from "react-router-dom";

class People extends Component {

    render() {
        let {item, match: {url}} = this.props;
        return (
            <div>
                Name: {item.name}
                <NavLink to={`${url}/${item.id}`}>-Info</NavLink>
            </div>
        );
    }
}

export default withRouter(People);
