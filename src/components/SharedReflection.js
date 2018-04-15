import React from 'react';
import {
  Button, Container, Grid, Header, Card, Item, Label, Menu, Input, Checkbox, Form, Modal,
} from 'semantic-ui-react';
import { Redirect } from 'react-router-dom'
import firebase from 'firebase';
const _ = require('lodash')

/*


*Which topics felt most connecting between you  and your date?*
- Childhood
- Geography
- Interests
- Work
- Relationships
- Politics
- Values
- Monetary

*Which topics felt least connecting between you  and your date?*
- Childhood
- Geography
- Interests
- Work
- Relationships
- Politics
- Values
- Monetary

Boundaries + Etiquette

*How did you feel about the way your date behaved with waitstaff or service workers?*
- Not polite enough
- A bit less polite than ideal
- Just right

*How did you feel about the punctuality of your date?*
- Doesn’t care enough about it
- Perfect, just right
- Too picky about it

*How do you feel about the monetary contributions between you and your date?*
- Perhaps my date should have contributed a bit more
- I was comfortable with it
- Perhaps I should have contributed a bit more


Communication

*How did you feel about the split between how much each of you talked?*
- My date talked more than I preferred
- I was happy with the split
- My date talked less than I preferred

*How did you feel about the split between how much your date talked about him/herself vs. you?*
- We talked more about my date than I wanted to
- I was happy with the split
- We talked more about me than I wanted to

*How did you feel about how much your date cared about your opinions?*
- My date cared about my opinions too much
- My date cared about my opinions just enough
- My date didn’t care enough about my opinions

*/
const debrief = [
  {
    text: 'How did you feel about the pace of physical intimacy on the date?',
    choices: [
      'Too fast, my date is moving beyond my comfort zone',
      'Just a bit fast, my date was a bit beyond my comfort zone',
      'Just right!',
      'Just a bit slow, wish my date would go further',
      'Too slow, wish my date would have made more moves'
    ],
    answer: {
      choice: null,
      info: ''
    }
  },
  {
    text: "How did you feel about your date's level of investment in the date?",
    choices: [
      'Not taking this relationship seriously enough',
      'A bit less serious than I would have liked',
      'Just the right amount',
      'A bit too serious that I would have liked',
      'Too serious for my liking right now'
    ],
    answer: {
      choice: null,
      info: ''
    }
  },
  {
    text: '',
    choices: [
      '',
      '',
      '',
      ''
    ],
    answer: {
      choice: null,
      info: ''
    }
  },
  {
    text: '',
    choices: [
      '',
      '',
      '',
      ''
    ],
    answer: {
      choice: null,
      info: ''
    }
  },
  {
    text: '',
    choices: [
      '',
      '',
      '',
      ''
    ],
    answer: {
      choice: null,
      info: ''
    }
  },
  {
    text: '',
    choices: [
      '',
      '',
      '',
      ''
    ],
    answer: {
      choice: null,
      info: ''
    }
  },
  {
    text: '',
    choices: [
      '',
      '',
      '',
      ''
    ],
    answer: {
      choice: null,
      info: ''
    }
  },
  {
    text: '',
    choices: [
      '',
      '',
      '',
      ''
    ],
    answer: {
      choice: null,
      info: ''
    }
  },
  {
    text: '',
    choices: [
      '',
      '',
      '',
      ''
    ],
    answer: {
      choice: null,
      info: ''
    }
  },
  {
    text: '',
    choices: [
      '',
      '',
      '',
      ''
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
