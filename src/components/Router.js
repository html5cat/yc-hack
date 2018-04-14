import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
// import App from './App'
import QuestionPack from './QuestionPack';
import NotFound from './NotFound'
import Dates from './Dates';
import Login from './Login'
import firebase from 'firebase'

const Router = () => (
  <div className='pad'>
    <BrowserRouter>
      <Switch>
        <PrivateRoute path='/dates' component={Dates} />
        <PrivateRoute path='/questions' component={QuestionPack} />
        <Route path='/login' component={Login}/>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </div>
)

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      firebase.auth().currentUser ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);


export default Router
