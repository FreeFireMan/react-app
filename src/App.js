import React, {Component} from 'react';
import AllUsers from "./components/all-users/AllUsers";
import {UserService} from "./services/UserService";

class App extends Component {

    userService = new UserService();
    myForm = React.createRef();
    state = {inputValue: '', user: null};

    render() {
        let {user, inputValue} = this.state;
        return (
            <div>
                <form action="/savedata" onSubmit={this.send} ref={this.myForm}>
                    <input type='number' name={'findUser'} onInput={this.commitState} value={inputValue}/>
                    <button>send</button>
                </form>
                <AllUsers/>

                {user && <div>{user.title}</div>}
            </div>
        );
    }

    send = (e) => {
        e.preventDefault();
        this.userService.getUserById(this.myForm.current[0].value)
            .then(value => this.setState({user: value}))
    };

    commitState = (e) => {
        this.setState({inputValue: e.target.value})
    }
}

export default App;