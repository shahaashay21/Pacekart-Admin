import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';

class Signup extends Component {
    render() {
        return (
            <div className="signup-container">
                <div className="registration-form">
                    <form>
                        <h3 className="text-center">Create your account</h3>
                        <div className="form-group">
                            <input className="form-control item" type="text" name="firstname" minLength="2" pattern="^[a-zA-Z0-9_.-]*$" id="firstname" placeholder="First name" autoFocus required />
                        </div>
                        <div className="form-group">
                            <input className="form-control item" type="text" name="lastname" minLength="2" pattern="^[a-zA-Z0-9_.-]*$" id="lastname" placeholder="Last name" required />
                        </div>
                        <div className="form-group">
                            <input className="form-control item" type="password" name="password" minLength="6" id="password" placeholder="Password" required />
                        </div>
                        <div className="form-group">
                            <input className="form-control item" type="email" name="email" id="email" placeholder="Email" required />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary btn-block create-account-btn" type="submit">Create Account</button>
                        </div>
                        <div className="text-center">
                            Back to <Link to="/login">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Signup;