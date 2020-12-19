import React, {Fragment, Component} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Alert from "./components/layout/Alert";
import Search from "./components/users/Search";
import About from "./components/pages/About";
import axios from "axios";

class App extends Component{

    state = {
        users: [],
        user: {},
        repos: [],
        loading: false,
        alert: null
    }

    // async componentDidMount(){

    //     this.setState({loading: true});

    //     const res = await axios.get("https://api.github.com/users");

    //     this.setState({users: res.data, loading: false});
    // }

    userSearch = async (text) => {
        this.setState({loading: true});

        const res = await axios.get("https://api.github.com/search/users?q="+text);

        this.setState({users: res.data.items, loading: false});

        this.setState({ alert: null});
    };


    getUser = async (username) => {
        this.setState({loading: true});

        const res = await axios.get("https://api.github.com/users/"+username);

        this.setState({ user: res.data, loading: false});
    }


    getUserRepos = async (username) => {
        this.setState({loading: true});

        const res = await axios.get("https://api.github.com/users/"+username+"/repos?per_page=5&sort=created:asc");

        this.setState({ repos: res.data, loading: false});
    }


    userClear = () => {
        this.setState({users: [], loading: false});
    }

    setAlert = (message, type) => {
        this.setState({ alert: {message: message, type: type}});
    }


    render(){

        const { users, user, repos, loading, alert} = this.state;

        return(
            <Router>
                <div>
                    <Navbar title="Github Finder"/>
                    <div className="container">
                        <Alert  alert={alert} />
                        <Switch>
                            <Route exact path='/' render={props => (
                                <Fragment>
                                    <Search 
                                    searchUsers={this.userSearch} 
                                        clearUsers={this.userClear} 
                                        showClear={users.length > 0 ? true : false} 
                                        setAlert={this.setAlert} 
                                    />
                                    <Users loading={loading} users={users}/>
                                </Fragment>
                            )}/>
                            <Route exact path="/about" component={About} />
                            <Route exact path="/user/:login" render={props => (
                                <User {...props} getUser={this.getUser} getUserRepos={this.getUserRepos} repos={repos} user={user} loading={loading}/>
                            )} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}



export default App;