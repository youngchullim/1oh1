import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { signup, clearErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';


const mapStateToProps = state => {
  return({
    errors: state.errors.session,
    navLink: <Link to='/login'>Log In</Link>
  });
};

const mapDispatchToProps = dispatch => {
  return({
    signup: (user) => dispatch(signup(user)),
    clear: () => dispatch(clearErrors()),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);