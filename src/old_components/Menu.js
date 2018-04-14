import React from 'react'
import Header from './Header'
import Fish from './Fish'

export default class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <Header tagline="Fresh Seafood Market" />
        <ul className="fishes">
          {Object.keys(this.props.fishes).map((key)=> {
            return (<Fish key={key} index={key} fish={this.props.fishes[key]} addToOrder={this.props.addToOrder} />)
          })}
        </ul>
      </div>
    )
  }
}


