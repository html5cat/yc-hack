import React from 'react';
import {
  Button, Container, Grid, Header, Card, Item, Divider, Label, Menu, Input, Checkbox, Form, Modal, List
} from 'semantic-ui-react';
import { Redirect } from 'react-router-dom'
import firebase from 'firebase';
import base, { firebaseApp } from '../base';
import DateView from '../pagedraw/dateview'
import '../css/styles.css'
const _ = require('lodash')


export default class Reflection extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    let uid = firebase.auth().currentUser.uid
    base.fetch(`yc/${uid}/dates`, {
      context: this,
      asArray: true
    }).then(data => {
      _.remove(data, (datum) => {
        return datum=='__init__';
      })
      this.setState(_.merge({}, this.state, {
        dates: data
      }))
    }).catch(error => {
      //handle error
    })

  }


  addNewDate() {
    let uid = firebase.auth().currentUser.uid

    var ref = base.push(`yc/${uid}/dates/`, {data: this.state.newDate})
      .then(newLocation => {
        var date = this.state.newDate;
        date['key'] = newLocation.key;
        this.setState(_.merge({}, this.state, {
          modalPage: 1,
          dates: _.concat(this.state.dates, [date]),
          newDate: {
            name: '',
            location: '',
            month: '',
            day: ''
          }
        }))
      }).catch(err => {
        //handle error
      });
  }


  render() {
    console.log("reflectio")
    console.log(this.state)
    return (
      <DateView/>
    )
  }
}
