import React, { Component } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import MasterLoginPage from './MasterLoginPage'
import MasterMainStructure from './MasterMainStructure'

import InitialPage from '../InitialPage';
export default class MasterModule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            userData: {},
            isLogin: undefined,
        }
    }

    componentDidMount() {
        // localStorage.removeItem('userData');
        this.updateLoginStatus();


    }

    updateLoginStatus() {
        let uData = localStorage.getItem('userData');
        console.log('tag------', uData);

        if (uData !== null && uData !== '') {
            var userData = JSON.parse(uData)
            this.setState({ userData, isLogin: true, isLoading: false });
        } else {
            this.setState({ isLogin: false, isLoading: false });
        }
    }

    render() {
        let { isLoading, isLogin, userData } = this.state;
        if (isLoading === true) {
            return <InitialPage />
        } else {
            if (isLogin === true) {
                return (
                    <>

                        <Switch>
                            {/* {this.state.isUserData != '' && <Route exact path='/master/dashboard' component={MasterMainStructure} />} */}
                            {/* <Route path='/master/login' component={MasterLoginPage} /> */}
                            <Route exact path='/'
                                component={props => <MasterMainStructure updateLoginStatus={this.updateLoginStatus.bind(this)} {...props} />}
                            />
                            <Route exact path='/master'
                                component={props => <MasterMainStructure updateLoginStatus={this.updateLoginStatus.bind(this)} {...props} />} />
                            <Route exact path='/master/*'
                                component={props => <MasterMainStructure updateLoginStatus={this.updateLoginStatus.bind(this)} {...props} />} />
                            {/* {this.state.isUserData === '' && <Route path='/master' component={MasterLoginPage} />} */}
                            {/* {this.state.isUserData !== '' && <Route exact path='/master/dashboard' component={MasterMainStructure} />} */}

                            {/* <Route exact path={path} component={MasterLoginPage} /> */}
                            {/* <Route exact path="/master/dashboard" component={MasterMainStructure} /> */}
                            {/* <Route path='/master/*' component={MasterMainStructure} /> */}
                            {/* <Route exact path={`${path}/*`} component={MasterLoginPage} /> */}
                        </Switch>


                    </>
                )
            } else {
                return (
                    <>

                        <Switch>

                            <Route
                                exact
                                path='/'
                                component={props => <MasterLoginPage updateLoginStatus={this.updateLoginStatus.bind(this)} {...props} />} />
                            <Route exact path='/master' component={props => <MasterLoginPage updateLoginStatus={this.updateLoginStatus.bind(this)}
                                {...props} />} />
                            <Route exact path='/master/*' component={props => <MasterLoginPage updateLoginStatus={this.updateLoginStatus.bind(this)}
                                {...props} />} />

                        </Switch>


                    </>
                )
            }
        }

    }


}
