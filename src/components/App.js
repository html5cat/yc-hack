import React from 'react'
import Menu from './Menu'
import Order from './Order'
import Inventory from './Inventory'
import sampleFishes from '../sample-fishes'
import base from '../base'

export default class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  }

  componentDidMount() {
    const localStorageRef = localStorage.getItem(this.props.match.params.storeId)
    if(localStorageRef) {
      this.setState({order: JSON.parse(localStorageRef)})
    }
    this.baseRef = base.syncState(`${this.props.match.params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    })
  }

  componentDidUpdate() {
    localStorage.setItem(
        this.props.match.params.storeId,
        JSON.stringify(this.state.order)
    )
  }

  componentWillUnmount() {
    base.removeBindind(this.baseRef)
  }

  addFish = (fish) => {
    const fishes = {...this.state.fishes}
    fishes[`fish-${Date.now()}`] = fish
    this.setState({ fishes })
  }

  addToOrder = (fish) => {
    const order = {...this.state.order}
    order[fish] = order[fish] + 1 || 1
    this.setState({ order })
  }

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <Menu
          fishes={this.state.fishes}
          addToOrder={this.addToOrder}
        />
        <Order
          order={this.state.order}
          fishes={this.state.fishes}
        />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    )
  }
}