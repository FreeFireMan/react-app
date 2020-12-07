import React, {Component} from 'react';

class Post extends Component {
    render() {
        let {item} = this.props;
        return (
            <div>
               <h1>{item.title}</h1>
                <p>{item.body}</p>
            </div>
        );
    }
}

export default Post;