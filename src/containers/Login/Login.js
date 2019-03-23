import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { userLogin } from '../../actions/Login';
import './login.css';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = { email: '', password: '' };

        // this.handelEmailChange = this.handelEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        // //this.formSubmit = this.formSubmit.bind(this);
    }
    componentDidMount() {
    }

    handelEmailChange = (e) => {
        // console.log(this);
        this.setState({ email: e.target.value });
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    formSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        this.props.userLogin(this.state.email, this.state.password);
    }

    render() {
        return (
            <div className="login-container">
                <div className="login-form">
                    <form onSubmit = { this.formSubmit }>
                        <h3 className="text-center">Login</h3>
                        <div className="form-group">
                            <input className="form-control item" type="email" name="email" id="email" onChange = { this.handelEmailChange } value={ this.state.email } autoFocus placeholder="Email" required />
                        </div>
                        <div className="form-group">
                            <input className="form-control item" type="password" name="password" onChange = { this.handlePasswordChange } value={ this.state.password } minLength="6" id="password" placeholder="Password" required />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary btn-block login-account-btn" type="submit">Login</button>
                        </div>
                        <div className="text-center">
                            Don't have an account? <Link to="/signup">Sign up now</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ login }) => {
    console.log(login);
    return {
        email: login.email,
        password: login.password
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators ({ userLogin }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);