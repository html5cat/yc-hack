import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
// import App from './App'
import QuestionPack from './QuestionPack';
import NotFound from './NotFound'
import Date from './Date';
import DateList from './DateList';
import Login from './Login'
import firebase from 'firebase'
import Homepage from '../pagedraw/homepage'

const Router = () => (
  <div className='pad'>
    <BrowserRouter>
      <Switch>
        <PrivateRoute path='/dates' component={DateList} />
        <PrivateRoute path='/dates/:date_id' component={Date} />
        <PrivateRoute path='/questions' component={QuestionPack} />
        <Route path='/login' component={Login}/>
        <Route component={Homepage} />
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
