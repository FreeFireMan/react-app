import React, {Component} from 'react';
import {UserService} from "../services/UserService";
import User from "../user/User";

class AllUsers extends Component {

    state = {users: []}
    userService = new UserService();

    async componentDidMount() {
        let users = await this.userService.getAllUsers();
        this.setState({users});
    }

    render() {
        let {users} = this.state;
        return (
            <div>
                {users.map(value => <User item={value} key={value.id}/>)}
            </div>
        );
    }
}

export default AllUsers;