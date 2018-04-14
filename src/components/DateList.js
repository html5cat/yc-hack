import React from 'react';
import {
  Button, Container, Grid, Header, Card, Item, Label, Menu, Input, Checkbox, Form, Modal,
} from 'semantic-ui-react';
import { Redirect } from 'react-router-dom'
import firebase from 'firebase';
const _ = require('lodash')

const dates = [
  {header: 'Jane Doe', meta: 'September 29th', description: 'SOMA'},
  {header: 'Emily Hu', meta: 'September 27th', description: 'Mountain View'},
]

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

export default class QuestionPack extends React.Component {
  constructor() {
    super()
    this.state = {
      newDate: {
        who: 'me',
        where: 'here',
        when: 'now',
      },
      dates: [
        {who: 'Jane Doe', when: 'September 29th', where: 'SOMA'},
        {who: 'Emily Hu', when: 'September 27th', where: 'Mountain View'},
        {who: 'Ali Weiss', when: 'September 20th', where: 'San Jose'},
      ]
    }
  }

  logout() {
    console.log('logging out')
    firebase.auth().signOut()
  }

  updateNewDateWho(e) {
    this.setState(_.merge({}, this.state, {
      newDate: {
        who: e.target.value
      }
    }))
  }

  updateNewDateWhere(e) {
    this.setState(_.merge({}, this.state, {
      newDate: {
        where: e.target.value
      }
    }))
  }

  updateNewDateWhen(e) {
    this.setState(_.merge({}, this.state, {
      newDate: {
        when: e.target.value
      }
    }))
  }


  addNewDate() {
    this.setState(_.merge({}, this.state, {
      dates: _.concat(this.state.dates, [this.state.newDate]),
      newDate: {
        who: '',
        where: '',
        when: '',
      }
    }))
  }

  dateToCardGroup(dates) {
    return _.map(dates, (date) => {
      return {
        header: date.who,
        meta: date.when,
        description: date.where,
      }
    })
  }

  render() {
    return (
      <Container>
        <Menu secondary>
          <Menu.Menu position='right'>
            <Modal
              trigger={<Menu.Item icon='plus' name='New Date'/>}
              style={{
                marginTop: '0px !important',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              <Header content='Add New Date' />
              <Modal.Content>
                <Input label="With who?" defaultValue={this.state.newDate.who} onChange={(e) => this.updateNewDateWho(e)}/>
                <Input label="Where?" defaultValue={this.state.newDate.where} onChange={(e) => this.updateNewDateWhere(e)}/>
                <Input label="When" defaultValue={this.state.newDate.when}  onChange={(e) => this.updateNewDateWhen(e)}/>
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
          <Card.Group items={this.dateToCardGroup(this.state.dates)} />
        </div>
      </Container>
    )
  }
}
