import React from 'react';
import {
  Button, Container, Grid, Header, Card, Item, Label, Menu, Input, Checkbox, Form, Modal,
} from 'semantic-ui-react';
import { Redirect } from 'react-router-dom'
import firebase from 'firebase';
const _ = require('lodash')

const debrief = [
  {
    text: 'Did your date bring up topics that sparked your curiosity?',
    choices: [
      'Yes',
      'No'
    ],
    answer: {
      choice: null,
      info: ''
    }
  },
  {
    text: 'Did your date understand what you were trying to convey?',
    choices: [
      'Yes',
      'No'
    ],
    answer: {
      choice: null,
      info: ''
    }
  },
  {
    text: 'Do you feel that you gave your date your undivided attention during the date? ',
    choices: [
      'Yes',
      'No'
    ],
    answer: {
      choice: null,
      info: ''
    }
  },
  {
    text: 'Did you ask your date clarifying questions?',
    choices: [
      'Yes',
      'No'
    ],
    answer: {
      choice: null,
      info: ''
    }
  },
  {
    text: 'Did your date engage you to think about things in different ways? ',
    choices: [
      'Yes',
      'No'
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

export default class PrivateReflection extends React.Component {
  constructor() {
    super()
    this.state = {
      debrief: debrief
    }
  }

  logout() {
    console.log('logging out')
    firebase.auth().signOut()
  }


  renderDebrief() {
    return (
      <div>
        <Header size='large'>Private Reflection</Header>
        <Form>
          {_.map(debrief, (question, index) => {
            return <Question key={index} data={question}/>
          })}
        </Form>
        <Button>Done</Button>
      </div>
    )
  }



  render() {
    console.log(this.props)
    return (
      <Container>
        <Menu secondary>

        </Menu>
        {this.renderDebrief()}
      </Container>
    )
  }
}
