import React, {Component} from 'react';
import User from "../user/User";
import {UserService} from "../services/UserService";

class AllUsers extends Component {

    userService = new UserService();

    state = {users: [], selectedUser: null};

    selectUser = (id) => this.userService.getUserById(id).then(value => this.setState({selectedUser:value}));

    componentDidMount() {
        this.userService.getAllUsers().then(value => this.setState({users:value}));
    }

    render() {
        let {users, selectedUser} = this.state;
        return (
            <div>
                {users.map(value => <User item={value} key={value.id} selectUser={this.selectUser} isShowBtn={true}/>)}
                <hr/>
                {selectedUser && <User item={selectedUser} isShowBtn={false}/>}
            </div>
        );
    }
}

export default AllUsers;