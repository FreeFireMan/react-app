import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class Post extends Component {
    render() {
        let {item, selectPost, isShowBtn,match:{url}} = this.props;
        return (
            <div>
                {item.title}

                <Link to={`${url}/${item.id}`}>Info</Link>

                {!isShowBtn && <button onClick={() => selectPost(item.id)}>Select Me</button>}

            </div>
        );
    }
}

export default withRouter(Post);