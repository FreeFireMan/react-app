import React, {Component} from 'react';
import {UserService} from "../services/UserService";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Post from "../posts/Post";

class FullUser extends Component {
    state = {user: null};
    userService = new UserService();

    async componentDidMount() {
        let {userId} = this.props;
        let user = await this.userService.getUserById(userId);
        this.setState({user});
    }

    render() {
        let {user} = this.state;
        let {match:{url},userId} = this.props;
        return (
            <div>
                {user && <div>{user.name}-{user.phone}-{user.email}</div>}
                <Link to={`${url}/posts`}>show user post</Link>
                <Switch>
                    <Route path={`${url}/posts`} render={()=>{
                       return <Post userId={userId} key={userId}/>
                    }}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(FullUser);