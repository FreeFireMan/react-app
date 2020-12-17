import React, {Component} from 'react';
import AllUsers from "./components/all-users/AllUsers";
import {UserService} from "./services/UserService";

class App extends Component {

    userService = new UserService();

    render() {
        return (
            <div>

                <AllUsers/>
            </div>
        );
    }

    findUser = () => {

        console.log(this.input1.current.value)
    }
}

export default App;