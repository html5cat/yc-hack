import React from 'react';
import {
  Button, Container, Grid, Header, Card, Item, Label, Menu, Input, Checkbox, Form, Modal,
} from 'semantic-ui-react';
import { Redirect } from 'react-router-dom'
import firebase from 'firebase';
import base, { firebaseApp } from '../base';
import DateListItem from '../pagedraw/datelistitem'
const _ = require('lodash')

const Question = (props) => (
    <Form.Group grouped>
      <Header size='medium'>{props.data.text}</Header>
      {
        _.map(props.data.choices, (choice, index) => {
          return <Form.Checkbox key={index} label={choice}/>
        })
      }
      <Form.TextArea width={12} label='Additional thoughts' />
    </Form.Group>
)

export default class DateList extends React.Component {
  constructor() {
    super()
    this.state = {
      modalPage: 0,
      newDate: {
        name: 'me',
        location: 'here',
        month: 'Sep',
        day: '28'
      },
      dates: [
        // {who: 'Jane Doe', when: 'September 29th', where: 'SOMA'},
        // {who: 'Emily Hu', when: 'September 27th', where: 'Mountain View'},
        // {who: 'Ali Weiss', when: 'September 20th', where: 'San Jose'},
      ]
    }
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

  logout() {
    console.log('logging out')
    firebase.auth().signOut()
  }

  updateNewDateName(e) {
    this.setState(_.merge({}, this.state, {
      newDate: {
        name: e.target.value
      }
    }))
  }

  updateNewDateLocation(e) {
    this.setState(_.merge({}, this.state, {
      newDate: {
        location: e.target.value
      }
    }))
  }

  updateNewDateMonth(e) {
    this.setState(_.merge({}, this.state, {
      newDate: {
        month: e.target.value
      }
    }))
  }

  updateNewDateDay(e) {
    this.setState(_.merge({}, this.state, {
      newDate: {
        day: e.target.value
      }
    }))
  }


  addNewDate() {
    let uid = firebase.auth().currentUser.uid

    var ref = base.push(`yc/${uid}/dates/`, {data: this.state.newDate})
      .then(newLocation => {
        var date = this.state.newDate;
        date['id'] = newLocation.key;
        this.setState(_.merge({}, this.state, {
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

  dateToCardGroup(dates) {
    return _.map(dates, (date) => {
      return <DateListItem key={date.key} date={date} privateLink="jkjk"/>
    })
  }

  render() {
    console.log(this.state)
    return (
      <Container>
        <Menu secondary>
          <Menu.Menu position='right'>
            <Modal
              onClose={() => {this.setState({_.merge({}, this.state, {modalPage: 0})})}}
              trigger={<Menu.Item icon='plus' name='New Date'/>}
              style={{
                marginTop: '0px !important',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              <Header content='Add New Date' />

              <Modal.Content>
                <Input label="Who" defaultValue={this.state.newDate.name} onChange={(e) => this.updateNewDateName(e)}/>
                <Input label="Where" defaultValue={this.state.newDate.location} onChange={(e) => this.updateNewDateLocation(e)}/>
                <Input label="Month" defaultValue={this.state.newDate.month}  onChange={(e) => this.updateNewDateMonth(e)}/>
                <Input label="Day" defaultValue={this.state.newDate.day}  onChange={(e) => this.updateNewDateDay(e)}/>

              </Modal.Content>
              <Modal.Actions>
                <Button color='green' inverted onClick={() => this.addNewDate()}>
                  Create
                </Button>
              </Modal.Actions>
            </Modal>
            <Menu.Item name='Logout' onClick={() => this.logout()} />
          </Menu.Menu>
        </Menu>
        <div>
          <Header size='large'>Your Dates</Header>
          {
            _.isEmpty(this.state.dates)
            ? <Header size='medium'>Go on more dates!</Header>
            : this.dateToCardGroup(this.state.dates)
          }
        </div>
      </Container>
    )
  }
}
