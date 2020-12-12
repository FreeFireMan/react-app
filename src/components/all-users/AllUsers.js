import React, {Component} from 'react';
import UserService from "../services/UserService";
import User from "../user/User";
import {Route, withRouter} from "react-router-dom";
import FullUser from "../full-user/FullUser";

class AllUsers extends Component {
    state = {users: []};
    userService = new UserService();

    async componentDidMount() {
        let users = await this.userService.getAllUser();
        this.setState({users});
    }

    render() {
        let {users} = this.state;
        let {match: {url}} = this.props;
        return (
            <div>
                {users.map(value => <User item={value} key={value.id}/>)}
                <hr/>
                <Route path={`${url}/:id`} render={(props) => {
                    const {match: {params: {id}}} = props;
                    return <FullUser {...props} key={id}/>
                }}/>
                <hr/>
            </div>
        );
    }
}

export default withRouter(AllUsers);