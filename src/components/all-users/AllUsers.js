import React, {Component} from 'react';
import {UserService} from "../../services/UserService";
import User from "../user/User";

class AllUsers extends Component {
    state = {users: []};
    userService = new UserService();
    input1 = React.createRef();

    componentDidMount() {
        this.userService.getUsers()
            .then(value => this.setState({users: value}));
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