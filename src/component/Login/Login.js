import React, { Component } from 'react';
import './Login.css'

export class Login extends Component {

    render() {
        return (
            <div>
                <div className="login-page">
                    <div className="form">
                        <form className="login-form">
                            <input type="text" placeholder="username" />
                            <input type="password" placeholder="password" />
                            <button>login</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}