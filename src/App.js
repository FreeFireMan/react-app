import React, {Component} from 'react';
import AllUsers from "./components/all-users/AllUsers";
import {UserService} from "./services/UserService";

class App extends Component {

    userService = new UserService();
    myForm = React.createRef();
    state = {inputValue:'',user:null};

    render() {
        let {user} = this.state;
        return (
            <div>
                <form action="/savedata" onSubmit={this.send} ref={this.myForm}>
                    <input type='number' onInput={this.commitState} />
                    <button>send</button>
                </form>
                <AllUsers/>

                {user && <div>{user.title}</div>}
            </div>
        );
    }

    send = (e) => {
        this.userService.getUserById(e.target.value)
            .then(value => this.setState({user: value}))
    };

    commitState = (e) => {
        this.userService.getUserById(e.target.value)
            .then(value => this.setState({user: value}))
    }
}

export default App;