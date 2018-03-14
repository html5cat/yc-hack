import React from 'react'

export default class EditFishForm extends React.Component {
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
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" onChange={this.handleChange} ref={this.nameRef} type="text" placeholder="Name" value={fish.name} />
        <input name="price" onChange={this.handleChange} ref={this.priceRef} type="text" placeholder="Price" value={fish.price} />
        <select name="status" onChange={this.handleChange} ref={this.statusRef}  value={fish.status}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out!</option>
        </select>
        <textarea name="desc" onChange={this.handleChange} ref={this.descRef} placeholder="Desc" value={fish.desc}></textarea>
        <input name="image" onChange={this.handleChange} ref={this.imageRef} type="text" placeholder="Image" value={fish.image} />
        <button type="submit">+ Add Fish</button>
      </form>
    )
  }
}
