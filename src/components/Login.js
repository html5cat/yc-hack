import React from 'react'
import PropTypes from 'prop-types'
import {
  Button, Icon,
} from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import firebase from 'firebase'
import base, { firebaseApp } from '../base';

export default class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      uid: null,
      redirectToReferrer: false
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.authHandler({ user })
      }
    })
  }

  authHandler = async (authData) => {
    // const store = await base.fetch(this.props.storeId, {
    //   context: this
    // })
    //
    // if (!store.owner) {
    //   await base.post(`${this.props.storeId}/owner`, {
    //     data: authData.user.uid
    //   })
    // }
    //
    // this.setState({
    //   uid: authData.user.uid,
    //   owner: store.owner || authData.user.uid
    // })
    // this.setState({
    //   uid: authData.user.uid,
    //   owner: store.owner || authData.user.uid
    // })

    this.setState({
      uid: authData.user.uid,
      redirectToReferrer: true
    });
  }

  authenticate = (provider) => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]()
    firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler)
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }


    return(
      <div className="login">
        <h2>Login</h2>
        <p>Sign in to log your date</p>
        <Button
          color='facebook'
          onClick={() => this.authenticate('Facebook')}>
          <Icon name='facebook' /> Facebook
        </Button>
        <Button
          color='twitter'
          onClick={() => this.authenticate('Twitter')}>
          <Icon name='twitter' /> Twitter
        </Button>
      </div>
    )
  }
}
