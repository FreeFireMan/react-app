import React, {Component} from 'react';

class User extends Component {
    render() {
        let {item, selectUser, isShowBtn} = this.props;
        return (
            <div>
                {item.name}
                {
                    isShowBtn && <button onClick={() => selectUser(item.id)}>Select me</button>
                }
            </div>
        );
    }
}

export default User;