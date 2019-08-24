import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      companyName: "",
      password: "",
      year: "",
      day: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);

// TEST
    this.renderEmailErrors = this.renderEmailErrors.bind(this);
    this.renderPasswordErrors = this.renderPasswordErrors.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup({email: this.state.email, password: this.state.password});
  }

  renderEmailErrors() {
    if (this.state.email.length > 0) {
      let email = this.state.email.split("");
      if (email.includes("@") && email.includes(".")) {
        if (this.props.errors.length > 0) {
          return(
            <span className="signup-error">We are sorry, that email is taken.</span>
          )
        }
      } else {
        return (
          <span className="signup-error">The email address you supplied is invalid.</span>
        )
      }
    }
  }

  renderPasswordErrors() {
    if (this.state.password.length < 9 && this.state.password.length !== 0) {
      return (
        <span className="signup-error">Your password is too short.</span>
      )
    }
  }

  
  renderErrors() {
    if (this.props.errors.length > 0) {
      return(
        <span className="signup-error">{this.props.errors[0]}</span>
      )
    }
  }
  render() {
    return(
      <div className="signup">
        <div className="signup-right">
          <div className="signup-form">
            <form onSubmit={this.handleSubmit}>
              <div className="signup-message">Create your account</div>
              <div className="signup-message2">Explore your customer's mind today.</div>
              <div className="signup-error-msg">{this.renderErrors()}</div>

              <div className="signup-info">
                <label>
                  <input type="text"
                    className="email login-input"
                    value={this.state.email}
                    onChange={this.update('email')}
                    onClick={this.props.clear}
                    placeholder="example@email.com"
                    />
                  <div className="signup-error-messages">{this.renderEmailErrors()}</div>
                </label>
                <label>
                  <input type="text"
                    className="company-name login-input"
                    value={this.state.companyName}
                    onChange={this.update('companyName')}
                    placeholder="Company name"
                    />
                </label>
                <label>
                  <input type="password"
                    className="password login-input "
                    value={this.state.password}
                    onChange={this.update('password')}
                    placeholder="8+ characters"
                    />
                    <div className="signup-error-messages">{this.renderPasswordErrors()}</div>
                </label>
                <div className="signup-options">
                  <input className="login-button" type="submit" value={this.props.formType} />
                  <button className="demo-button" onClick={this.demoLogin}>Log In with Demo</button> 
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="login-redirect">
          <div className="login-center">
            <div className="welcome-back">Welcome back!</div>
            <div className="welcome-msg">Continue to study customer's thoughts and feedbacks.</div>
            <a className="login-link" role="button" onClick={this.props.clear} href="/#/login">SIGN IN</a>
          </div>
        </div>
      </div>
    )
  }

}

export default SignupForm;
