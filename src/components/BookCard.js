import React from 'react';

class BookCard extends React.Component {
  state = {name:this.props.name,rating:this.props.rating}
  test = (e) => {
    e.preventDefault()
    console.log(e.target.p);
  }
  render(){
    return (
      <form >
        <label>book :</label>
        <input type="text"  placeholder={this.state.name} value="" disabled  ></input>
        <label>rating</label>
        <input type="number" placeholder={this.state.rating} value="" disabled  ></input>
        <button onClick={this.test}>Edit</button>
        <button>Cancel</button>
        <button >Delete</button>
      </form>
    )
  }
}

export default BookCard;
