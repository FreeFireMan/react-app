import React, {Component} from 'react';

class ViewPost extends Component {
    render() {
        let {item,choseThisPost} = this.props;
        return (
            <div>
                <h1>Title - {item.title}</h1>
                <p>Body - {item.body}</p>
                <button onClick={()=>choseThisPost(item.id)}>View Post</button>
            </div>
        );
    }
}


export default ViewPost;

