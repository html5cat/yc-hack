import React from 'react'
import Menu from './Menu'
import Order from './Order'
import Inventory from './Inventory'
import sampleFishes from '../sample-fishes'

export default class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  }

  addFish = (fish) => {
    const fishes = {...this.state.fishes}
    fishes[`fish-${Date.now()}`] = fish
    this.setState({ fishes })
  }

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <Menu fishes={this.state.fishes} />
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    )
  }
}