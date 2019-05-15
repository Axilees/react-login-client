import React, {Component} from 'react';
import './App.css';
import Login from "./pages/Login";
import Main from "./pages/Main"
import {Route, Switch, withRouter} from 'react-router-dom';

class App extends Component {

    onLogin = ()=> {
        this.props.history.push("/main")
    }
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path={"/main"} exact={true} component={Main} />
                    <Route path={"/"} exact={true} render={
                        ()=>(
                            <Login login={this.onLogin}/>
                        )}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
