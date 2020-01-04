import React from "react";

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      item: '',
      quantity: null,
      condition:,
      description: '',
      image:,
    };
  }
 
  render() {
    return (
      <form>
      <p>Enter item:</p>
      <input
        type='text'
        name='item'
        onChange={this.myChangeHandler}
      />
      <p>Enter quantity:</p>
      <input
        type='text'
        name='quantity'
        onChange={this.myChangeHandler}
      />
      <select value={this.state.mycar}>
        <option value="Excellent">Excellent</option>
        <option value="Good">Good</option>
        <option value="Fair">Fair</option>
        <option value="Poor">Poor</option>
      </select>
      
      </form>
    );
  }
}

export default ItemForm;
