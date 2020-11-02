import React, { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import MasterDashboard from './MasterDashboard'
import MasterDoctor from './MasterDoctor'
import MasterSecurity from './MasterSecurity'
import MasterSociety from './MasterSociety'

export default class MasterMainStructure extends Component {

    logoutFun() {
        localStorage.removeItem('userData');
        // window.location.href = "/master"
        this.props.updateLoginStatus();
        this.props.history.push("/master")
    }
    render() {
        return (
            <>
                <main className="d-flex vh-100 flex-column mainStructure">
                    <header>
                        <div className="d-flex align-items-center justify-content-between  bg-dark text-white">
                            <div className="logo p-3"><h4 className="font-weight-bold mb-0">THE BUCKET LIST</h4></div>
                            <div className="px-3">
                                <button className="btn btn-sm btn-dark mr-4">Hello, Soumen</button>
                                <button className="btn btn-sm btn-dark" onClick={() => this.logoutFun()}>
                                    <i className="material-icons d-inline-flex align-middle">power_settings_new</i>
                                </button>
                                {/* <button className="btn btn-sm btn-dark" onClick={() => window.location.href = '/master'}>
                                    <i className="material-icons d-inline-flex align-middle">power_settings_new</i>
                                </button> */}
                            </div>
                        </div>
                    </header>
                    <section className="d-flex h-100 ">
                        <aside  >

                            <div className="h-100 bg-dark  ">
                                <nav>
                                    <ul className="list-unstyled">
                                        <li>
                                            <NavLink to='/master/dashboard' activeClassName="active">
                                                <i className="material-icons">dashboard</i>
                                            Dashboard</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/master/society' activeClassName="active">
                                                <i className="material-icons">domain</i>
                                            Society</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/master/security' activeClassName="active">
                                                <i className="material-icons">security</i>
                                            Security</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/master/doctor' activeClassName="active">
                                                <i className="material-icons">note_add</i>
                                            Doctor</NavLink>
                                        </li>

                                    </ul>
                                </nav>
                            </div>


                        </aside>
                        <div className="rightSide  ">
                            <div className="h-100 overflow-auto p-4">
                                <Switch>
                                    <Route exact path="/master" component={MasterDashboard} />
                                    <Route exact path="/master/dashboard" component={MasterDashboard} />
                                    <Route exact path="/master/doctor" component={MasterDoctor} />
                                    <Route exact path="/master/security" component={MasterSecurity} />
                                    <Route exact path="/master/society" component={MasterSociety} />
                                    <Route exact path="/master/*" component={props => 404} />
                                </Switch>
                            </div>
                        </div>
                    </section>
                </main>
            </>
        )
    }
}
