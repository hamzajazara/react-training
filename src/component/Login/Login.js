import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../../action/login.actions'
import './Login.css'

class Login extends Component {

    constructor(props) {
        super(props);

        this.onLogin = this.onLogin.bind(this);
    }

    onLogin = () => {
        setTimeout(() => {
            return this.props.onLogin({
                name: 'HAMZAWEEEE',
                last: 'ALJAZARA'
            });
        }, 2000);
    }

    render() {
        return (
            <div className="login-page">
                <div className="form">
                    
                    { this.props.login.user.name }  { this.props.login.user.last }
                    <div className="login-form">
                        <input type="text" placeholder="username" />
                        <input type="password" placeholder="password" />
                        <button onClick={this.onLogin}>login</button>
                    </div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => ({
    login: state.login
});

const mapActionsToProps = {
    onLogin: loginUser
}

export default connect(mapStateToProps, mapActionsToProps)(Login);