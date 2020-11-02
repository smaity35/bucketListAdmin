import React, { Component } from 'react'

export default class MasterLoginPage extends Component {
    loginFun() {
        localStorage.setItem('userData', JSON.stringify({ name: 'admin' }));
        this.props.updateLoginStatus();
        this.props.history.push("/master/dashboard")
    }
    render() {
        return (
            <>
                <section className="loginPage d-flex align-items-center justify-content-center min-vh-100">
                    <div className="login">
                        <div className="loginForm">
                            <h2 className="text-center text-uppercase text-white mb-5">Login</h2>
                            <form>
                                <div className="form-group position-relative mb-4">
                                    <div className="icon">
                                        <span className="material-icons">
                                            person
                                        </span>
                                    </div>
                                    <input type="text" placeholder="Username" className="form-control" />
                                </div>
                                <div className="form-group position-relative mb-4">
                                    <div className="icon">
                                        <span className="material-icons">
                                            lock
                                        </span>
                                    </div>
                                    <input type="password" placeholder="Password" className="form-control" />
                                </div>
                                <div className="checkBox mb-4">
                                    <label>
                                        <input type="checkbox" className="form-control" />
                                        Remember Me
                                    </label>
                                </div>
                                <div className="loginBtn">
                                    {/* <button className="btn" type="button" onClick={() => window.location.href = '/master/dashboard'}>Login</button> */}
                                    <button className="btn" type="button" onClick={() => this.loginFun()}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
