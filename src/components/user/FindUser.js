import React, {Component} from 'react';
import {UserService} from "../../services/UserService";
import User from "./User";

class FindUser extends Component {
    userService = new UserService();
    state = {user: null, inputValue: ''};
    userForm = React.createRef();

    findUser = (e) => {
        e.preventDefault();
        this.userService.getUserById(this.userForm.current[0].value)
            .then(value => this.setState({user: value}))
    }

    inputState = (e) => {
        this.setState({inputValue: e.target.value})
    }
    searchUser = (id) => {
        this.userService.getUserById(id)
            .then(value => this.setState({selectedUser: value}))

    }

    render() {
        let {inputValue, user,} = this.state;
        return (
            <div>
                <form action="/finder" onSubmit={this.findUser} ref={this.userForm}>
                    <input type="number" onInput={this.inputState} value={inputValue}/>
                    <button>Find</button>
                </form>
                {user && <User item={user} key={user}/>}
            </div>
        );
    }
}

export default FindUser;