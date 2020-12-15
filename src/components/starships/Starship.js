import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
class Starship extends Component {
    render() {
        let {item} = this.props;
        let {match:{url}} = this.props;
        return (
            <div>
                {item.name}-<Link to={`${url}/${item.id}`}>-Info</Link>
            </div>
        );
    }
}

export default withRouter(Starship);