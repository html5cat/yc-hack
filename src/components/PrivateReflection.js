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
