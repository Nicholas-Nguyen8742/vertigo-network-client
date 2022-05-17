import './LoginForm.scss';
import React, { Component } from 'react';


/* Used for both Client & Pilot Portal Logins */
class LoginForm extends Component {
    state = {
        success: false
    }

    render() {
        return (
            <form className="loginForm" onSubmit={this.handleSubmit}>
                
            </form>
        );
    }
}

export default LoginForm;