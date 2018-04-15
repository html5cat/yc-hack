import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
// import App from './App'
import QuestionPack from './QuestionPack';
import NotFound from './NotFound'
import DateList from './DateList';
import Login from './Login'
import firebase from 'firebase'
import Homepage from '../pagedraw/homepage'
import SharedReflection from './SharedReflection'
import PrivateReflection from './PrivateReflection'

const Router = () => (
  <div className='pad'>
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path='/dates' component={DateList} />
        <Route path='/dates/:date_id/shared' component={SharedReflection} />
        <PrivateRoute path='/dates/:date_id/private' component={PrivateReflection}/>
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
