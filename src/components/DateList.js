import React from 'react';
import {
  Button, Container, Grid, Header, Card, Item, Label, Menu, Input, Checkbox, Form, Modal,
} from 'semantic-ui-react';
import { Redirect } from 'react-router-dom'
import firebase from 'firebase';
const _ = require('lodash')

const debrief = [
  {
    text: 'What is your favorite type of ice cream?',
    choices: [
      'Chocolate',
      'Vanilla',
      'Strawberry',
      'Other'
    ],
    answer: {
      choice: null,
      info: ''
    }
  },
  {
    text: 'What is your favorite type of ice cream',
    choices: [
      'Chocolate',
      'Vanilla',
    ],
    answer: {
      choice: null,
      info: ''
    }
  },
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
  }

  logout() {
    console.log('logging out')
    firebase.auth().signOut()
  }

  render() {
    return (
      <Container>
        <Menu secondary>
          <Menu.Menu position='right'>
            <Modal
              trigger={<Menu.Item icon='plus' name='New Date' onClick={() => this.addNewDate()} />}
              header='Share'
              actions={[
                'Share Debrief',
              ]}
              style={{
                marginTop: '0px !important',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              <Header icon='archive' content='Archive Old Messages' />
              <Modal.Content>
                <Input label="With who?"/>
                <Input label="Where?"/>
                <Input label="When"/>
              </Modal.Content>
              <Modal.Actions>
                <Button color='green' inverted>
                  Create
                </Button>
              </Modal.Actions>
            </Modal>
            <Menu.Item name='Logout' onClick={() => this.logout()} />
          </Menu.Menu>
        </Menu>
        <div>
          <Header size='large'>Your Dates</Header>
          <Card.Group items={[
            {header: 'Jane Doe', meta: 'September 29th', description: 'SOMA'},
            {header: 'Emily Hu', meta: 'September 27th', description: 'Mountain View'},
          ]} />
        </div>
      </Container>
    )
  }
}
