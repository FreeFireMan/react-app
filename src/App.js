import React, {Component} from 'react';
import AllUsers from "./components/all-users/AllUsers";
import AllPosts from "./components/all-posts/AllPosts";

class App extends Component {
    render() {
        return (
            <div>
                <AllUsers/>
                <AllPosts/>
            </div>
        );
    }
}
export default App;