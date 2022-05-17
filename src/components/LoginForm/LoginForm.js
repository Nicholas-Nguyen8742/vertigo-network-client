import './LoginForm.scss';
import React, { Component } from 'react';

class LoginForm extends Component {
    state = {
        success: false
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                
            </form>
        );
    }
}

export default LoginForm;