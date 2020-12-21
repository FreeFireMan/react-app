import React, {Component} from 'react';
import {UserService} from "../../services/UserService";
import User from "./User";

class FindUser extends Component {

    userService = new UserService();
    state = {user: null, inputValue: '', error: null};
    userForm = React.createRef();

    findUser = (e) => {
        e.preventDefault();

        this.userService
            .getUserById(this.userForm.current[0].value)
            .then(user => this.setState({user, error: null}))
            .catch(error => this.setState({error: error.toString(), user: null}))
    }

    inputState = ({target: {value}}) => {
        this.setState({inputValue: value})
    }

    render() {

        let {inputValue, user,error} = this.state;

        return (
            <div>
                <form action="" onSubmit={this.findUser} ref={this.userForm}>
                    <input type="number" onInput={this.inputState} value={inputValue}/>
                    <button>Find</button>
                </form>
                {user && <User item={user} key={user}/>}
                {error && <h1 style={{color: 'red'}}>{error}</h1>}
            </div>
        );
    }
}

export default FindUser;
