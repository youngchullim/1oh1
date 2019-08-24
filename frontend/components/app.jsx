import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute }from '../util/route_util';

import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';


const App = () => {
  return (
    <div className="app-comp">
      
      <Switch>
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route path="/" component={LoginFormContainer}/>
      </Switch>
    </div>
  )
};

export default App;
