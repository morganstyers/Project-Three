import React from "./node_modules/react";

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      item: '',
      quantity: null,
      condition: '',
      description: '',
      file: null,
    };
  }
 
  render() {
    return (
      <form>
        <p>Enter Category:</p>
      <input
        type='text'
        name='category'
      />
      <p>Enter item:</p>
      <input
        type='text'
        name='item'
      />
      <p>Enter quantity:</p>
      <input
        type='num'
        name='quantity'
      />
      <p>Enter condition:</p>
      <input
        type='text'
        name='condition'
      />
      {/* <select >
        <option value="Excellent">Excellent</option>
        <option value="Good">Good</option>
        <option value="Fair">Fair</option>
        <option value="Poor">Poor</option>
      </select> */}
      <p>Enter description:</p>
      <textarea value={this.state.description} />
      <p>Image Upload:</p>
        <input type="file" onChange={this.onChange} />
        <button type="submit">Upload</button>
      </form>
    );
  }
}

export default ItemForm;
