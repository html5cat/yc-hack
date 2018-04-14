import React from 'react';
import {
  Button, Container, Grid, Header, Card, Item, Label, Menu, Input, Checkbox, Form, Modal,
} from 'semantic-ui-react';
import { Redirect } from 'react-router-dom'
import firebase from 'firebase';
const _ = require('lodash')

const questions = [
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

  addNewDate() {

  }

  renderDebrief() {
    return (
      <div>
        <Header size='large'>Debrief</Header>
        <Form>
          {_.map(questions, (question, index) => {
            return <Question key={index} data={question}/>
          })}
        </Form>
        <Modal
          trigger={<Button>Share</Button>}
          header='Share'
          content={<Input label="Partner's Phone Number"/>}
          actions={[
            'Share Debrief',
          ]}
          style={{
            marginTop: '0px !important',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        />
      </div>
    )
  }

  renderNewDate() {
    return (
      <div>
        <Header size='large'>New Date</Header>
        <Input placeholder='With Who?' />
        <Input placeholder='When?' />
        <Input placeholder='Where?' />
        <Header size="medium">Checklist</Header>
        <Form>
          <Form.Field
            control={Checkbox}
            label={<label>Checkbox 1</label>}
          />
          <Form.Field
            control={Checkbox}
            label={<label>Checkbox 2</label>}
          />
          <Form.Field
            control={Checkbox}
            label={<label>Checkbox 2</label>}
          />
        </Form>

        <Header size="medium">After the date</Header>

        <Button fluid>
          <Header size='small'>Solo Debrief</Header>
          Solo debrief paragraph
        </Button>

        <Button fluid>
          <Header size='small'>Shared Debrief</Header>
          Shared debrief paragraph
        </Button>

      </div>
    )
  }

  renderDateList() {
    return (
      <div>
        <Header size='large'>Your Dates</Header>
        <Card.Group items={[
          {header: 'Jane Doe', meta: 'September 29th', description: 'SOMA'},
          {header: 'Emily Hu', meta: 'September 27th', description: 'Mountain View'},
        ]} />
      </div>
    )
  }

  render() {
    return (
      <Container>
        <Menu secondary>
          <Menu.Menu position='right'>
            <Menu.Item icon='plus' name='New Date' onClick={() => this.addNewDate()} />
            <Menu.Item name='Logout' onClick={() => this.logout()} />
          </Menu.Menu>
        </Menu>
        {this.renderDebrief()}
      </Container>
    )
  }
}
