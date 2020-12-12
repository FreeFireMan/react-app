import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class User extends Component {
    render() {
        let {item, selectUser, isShowBtn,match:{url}} = this.props;
        return (
            <div>
                {item.id} - {item.name}

                <Link to={`${url}/${item.id}`}>Info</Link>

                {!isShowBtn && <button onClick={() => selectUser(item.id)}>Select me</button>}
            </div>
        );
    }
}

export default withRouter(User);