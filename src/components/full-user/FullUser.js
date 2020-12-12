import React, {Component} from 'react';
import UserService from "../services/UserService";

class FullUser extends Component {
    state = {user:null}
    userService = new UserService();
    async componentDidMount() {
        await this.userService.getUserById()
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default FullUser;