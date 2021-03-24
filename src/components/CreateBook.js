import React from 'react';
import MockApi from '../apis/MockApi'


class CreateBook extends React.Component {
  state={name:"",rating:""}
  addBook = async(e)=>{
    e.preventDefault()
    await MockApi.post("/books", {bookName:this.state.name,bookRating:this.state.rating});
    alert("book saved")
  }
  
  render(){
    return (
      <form onSubmit={this.addBook} >
        <input type="text" placeholder="book name" value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}}></input>
        <input type="text" placeholder="book rating" value={this.state.rating} onChange={(e)=>{this.setState({rating:e.target.value})}} ></input>
        <button type="submit">submit</button>
      </form>
    )
  }
}

export default CreateBook;
