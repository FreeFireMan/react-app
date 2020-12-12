import React, {Component} from 'react';
import UserService from "../services/UserService";
import User from "../user/User";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class AllUsers extends Component {
    userService = new UserService();

    state = {users: [], selectedUser: null};

    selectUser = (id) => {
        this.setState({selectedUser: this.state.users.find(value => value.id === id)});
    }

    async componentDidMount() {
        let users = await this.userService.getAllUser()
        this.setState({users})
    };

    render() {
        let {users, selectedUser} = this.state;
        return (
            <div>
                {
                    users.map(value => <User item={value} key={value.id} selectUser={this.selectUser}/>)
                }
                {
                    selectedUser && <User item={selectedUser} key={selectedUser.id} isShowBtn={true}/>
                }


            </div>
        );
    }
}

export default AllUsers;