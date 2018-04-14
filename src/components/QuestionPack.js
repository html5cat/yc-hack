import React from 'react'
import {
  Button, Container, Grid, Header, Card, Item, Label, Menu, Segment, Step,
} from 'semantic-ui-react'
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
  render() {
    return (
      <Container>
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
