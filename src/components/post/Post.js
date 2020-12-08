import React, {Component} from 'react';

class Post extends Component {
    render() {
        let {item,selectPost,isShowBtn} = this.props;
        return (
            <div>
                {item.title}
                {
                   !isShowBtn && <button onClick={()=>selectPost(item.id)}>Select Me</button>
                }

            </div>
        );
    }
}

export default Post;