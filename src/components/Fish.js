import React from 'react'
import { formatPrice } from '../helpers'

export default class Fish extends React.Component {
  handleClick = () => {
    this.props.addToOrder(this.props.index)
  }

  render() {
    const fish = this.props.fish
    const isAvailable = fish.status === "available"

    return (
      <li className="menu-fish">
        <img src={fish.image} alt={fish.name} />
        <h3 className="fish-name">
          {fish.name}
          <span className="price">
            {formatPrice(fish.price)}
          </span>
        </h3>
        <p>{fish.desc}</p>
        <button
          disabled={!isAvailable}
          onClick={this.handleClick}
        >
          {isAvailable ? "Add to Order" : "Sold Out!"}
        </button>
      </li>
    )
  }
}