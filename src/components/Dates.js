import React from 'react';
import {
  Button, Container, Grid, Header, Card, Item, Label, Menu, Input, Checkbox, Form,
} from 'semantic-ui-react';
import { Redirect } from 'react-router-dom'
import firebase from 'firebase';


const Question = (props) => {
  <Form>
    <Form.Group>
      <Header size='medium'>Q1. This is question 1</Header>
      <Form.Input placeholder='Name' name='name' />
      <Form.Input placeholder='Email' name='email'/>
      <Form.TextArea content='Submit' />
    </Form.Group>
  </Form>
}

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
      <div>
        <Question/>
      </div>
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
