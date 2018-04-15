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
          return <Form.Checkbox key={index} label={choice} questionKey={props.key} onClick={this.props.handleOnClick}/>
        })
      }
      <Form.TextArea width={12} label='Additional thoughts' />
    </Form.Group>
)

export default class SharedReflection extends React.Component {
  constructor() {
    super()
    this.state = debrief;
  }

  logout() {
    console.log('logging out')
    firebase.auth().signOut()
  }


  onClick() {
    let newState = Object.assign({}, this.state);
    this.setState({

    })
  }

  renderDebrief() {
    return (
      <div>
        <Header size='large'>Shared Reflection</Header>
        <Form>
          {_.map(debrief, (question, index) => {
            return <Question key={index} data={question}/>
          })}
        </Form>
        <Modal
          trigger={<Button>Share</Button>}
          header='Share'
          content={
            <div className="pad-large">
              <p>Link to share with your partner: {"https://datable.netlify.com" +  this.props.match.url + '/partners'}</p>
            </div>
          }
          style={{
            marginTop: '0px !important',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        />
      </div>
    )
  }

  renderDate() {
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



  render() {
    console.log(this.state)
    return (
      <Container>
        <Menu secondary>

        </Menu>
        {this.renderDebrief()}
      </Container>
    )
  }
}
