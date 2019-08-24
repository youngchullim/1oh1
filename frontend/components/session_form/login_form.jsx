import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login({email: this.state.email, password: this.state.password});
  }


  renderErrors() {
    if (this.props.errors.length > 0) {
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={i} className="login-error">
              {error}
            </li>
          ))}
        </ul>
      )
    }
  }
  render() {
    return(
      <div className="login">
        <div className="login-section">
          <div className="login-title">
            <div className="login-message">Sign In to InMind</div><br/>
            <div className="login-message2">Enter your details below.</div><br/>
          </div>
          <div className="login-form">
            <form onSubmit={this.handleSubmit} >
              <div className="login-error-message">{this.renderErrors()}</div>
              <div className="login-info">
                <div className="email-title">Email</div>
                <label onChange={this.props.clear}>
                  <input type="text"
                    className="email-input login-input"
                    value={this.state.email}
                    onChange={this.update('email')}
                    placeholder="example@email.com"
                    />
                </label>
                
                <div className="email-title">Password</div>
                <label onChange={this.props.clear}>
                  <input type="password"
                    className="password-input login-input"
                    value={this.state.password}
                    onChange={this.update('password')}
                    placeholder="Enter your password"
                    />
                </label>
                <div className="login-submit">
                  <label className="remember-submit">
                    <input className="remember-checkbox" type="checkbox"/>
                    <div className="remember-me">Remember me</div>
                  </label>
                  <div className="login-space-between"></div>
                  <input className="login-button" type="submit" value={"SIGN IN"} />
                </div>
                <div to="/forgotPassword" className="forgot-password">Forgot Password?</div>
              </div>
            </form>
          </div>
        </div>
        <div className="signup-redirect">
          <div className="hola">Hola!</div> 
          <div className="hola-msg">Look into what your customer is thinking of today!</div> 
          <a className="signup-button" role="button" onClick={this.props.clear} href="#/signup">SIGN UP</a>
        </div>
      </div>
    )
  }

}

export default LoginForm;
