import React from 'react'
import PropTypes from 'prop-types'

export default class EditFishForm extends React.Component {
  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number
    }),
    index: PropTypes.string,
    updatedFish: PropTypes.func,
    deleteFish: PropTypes.func
  }

  // nameRef = React.createRef()
  // priceRef = React.createRef()
  // statusRef = React.createRef()
  // descRef = React.createRef()
  // imageRef = React.createRef()

  handleChange = (event) => {
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    }
    this.props.updateFish(this.props.index, updatedFish)
  }

  // createFish = (event) => {
  //   event.preventDefault()
  //   const fish = {
  //     name: this.nameRef.value.value,
  //     price: parseFloat(this.priceRef.value.value),
  //     status: this.statusRef.value.value,
  //     desc: this.descRef.value.value,
  //     image: this.imageRef.value.value,
  //   }
  //   this.props.editFish(fish)
  //   event.currentTarget.reset()
  // }

  render() {
    const fish = this.props.fish

    return (
      <form className="fish-edit">
        <input name="name" onChange={this.handleChange} ref={this.nameRef} type="text" placeholder="Name" value={fish.name} />
        <input name="price" onChange={this.handleChange} ref={this.priceRef} type="text" placeholder="Price" value={fish.price} />
        <select name="status" onChange={this.handleChange} ref={this.statusRef}  value={fish.status}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out!</option>
        </select>
        <textarea name="desc" onChange={this.handleChange} ref={this.descRef} placeholder="Desc" value={fish.desc}></textarea>
        <input name="image" onChange={this.handleChange} ref={this.imageRef} type="text" placeholder="Image" value={fish.image} />
        <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
      </form>
    )
  }
}
