import React from 'react';


class CreateBook extends React.Component {
  state={name:"",rating:""}
  addBook = (e)=>{
    e.preventDefault()
    console.log(this.state);
  }
  render(){
    return (
      <form onSubmit={this.addBook}>
        <label>book :</label>
        <input type="text" value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}} ></input>
        <label>rating</label>
        <input type="number" value={this.state.rating} onChange={(e)=>{this.setState({rating:e.target.value})}} ></input>
        <button type="submit" >Submit</button>
      </form>
    )
  }
}

export default CreateBook;