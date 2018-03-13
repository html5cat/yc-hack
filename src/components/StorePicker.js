import React from 'react'
import { getFunName } from '../helpers'

export default class StorePicker extends React.Component {
  storeName = React.createRef()

  goToStore = (event) => {
    event.preventDefault()
    const name = this.storeName.value.value
    this.props.history.push(`/store/${name}`)
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
      <h2>Please enter a store</h2>
        <input
          type="text"
          ref={this.storeName}
          required
          placeholder={"Store Name"}
          defaultValue={getFunName()}
        />
        <button type="submit">Visit store</button>
      </form>
    )
  }
}
