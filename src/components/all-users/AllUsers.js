import React, {Component} from 'react';
import {UserService} from "../../services/UserService";
import User from "../user/User";

class AllUsers extends Component {
    state = {users: []};
    userService = new UserService();


    componentDidMount() {
        this.userService.getUsers()
            .then(value => this.setState({users: value}));
    }

    render() {
        let {users} = this.state;
        return (

            <div>

            </div>
        );
    }



}

export default AllUsers;