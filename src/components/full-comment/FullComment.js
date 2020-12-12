import React, {Component} from 'react';
import {CommentService} from "../services/CommentService";

class FullComment extends Component {
    state = {comment: null};
    commentService = new CommentService();

    async componentDidMount() {
        let {match: {params: {id}}} = this.props;
        let comment = await this.commentService.getCommentById(id);
        this.setState({comment});
    }

    render() {
        let {comment} = this.state;
        return (
            <div>
                {
                    comment && <div>{comment.id}-{comment.name}-{comment.email}</div>
                }
            </div>
        );
    }
}

export default FullComment;