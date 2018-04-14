import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
// import App from './App'
import QuestionPack from './QuestionPack';
import NotFound from './NotFound'
import Login from './Login'
import firebase from 'firebase'

const Router = () => (
  <div className='pad'>
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/questions' component={QuestionPack} />
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
