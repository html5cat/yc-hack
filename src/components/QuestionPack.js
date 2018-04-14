import React from 'react';
import {
  Button, Container, Grid, Header, Card, Item, Label, Menu, Segment, Step,
} from 'semantic-ui-react';
import firebase from 'firebase';

//
// const items = [
//   {
//     header: 'Family',
//     // meta: '',
//     // description: ''
//   },
//   {
//     header: 'Friends',
//   },
//   {
//     header: 'Personal goals',
//   },
// ]


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
            <Menu.Item name='logout' onClick={() => this.logout()} />
          </Menu.Menu>
        </Menu>
        <Header size='large'>Interpersonal Relationships</Header>
        <Card.Group items={[
          {header: 'Family'},
          {header: 'Friends'},
        ]} />

      <Header size='large'>Personal Values</Header>
        <Card.Group items={[{ header: 'Political Stance'}]} />

      </Container>
    )
  }
}
