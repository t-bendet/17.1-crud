import React from 'react';
import MockApi from '../apis/MockApi'



class BookCard extends React.Component {
  state = {edit:false,id:this.props.id,name:"",rating:0}
  edit = (e)=>{
    e.preventDefault()
    this.setState({edit:true})
  }
  cancel = (e)=>{
    e.preventDefault()
    this.setState({edit:false})
  }
  submit = async (e)=>{
    e.preventDefault()
    console.log("submit");
    await MockApi.put(`books/${this.state.id}`, {bookName:this.state.name,bookRating:this.state.rating});
    this.props.updateState(this.state.id,this.state.name,this.state.rating)
  }
  delete = async (e)=>{
    e.preventDefault()
    await MockApi.delete(`books/${this.state.id}`);
    this.props.deleteBook(this.state.id)
  }
  inputs = ()=>{
    return (
      <form onSubmit={this.submit} >
        <input type="text" placeholder={this.props.name} value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}}></input>
        <input type="text" placeholder={this.props.rating} value={this.state.rating} onChange={(e)=>{this.setState({rating:e.target.value})}} ></input>
        <button type="submit">submit</button>
      </form>
    )
  }
  componentDidUpdate(){
    console.log(this.state);
  }
  render(){
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>{this.props.rating}</p>
        {this.state.edit && this.inputs()}
        <button onClick={this.edit}>edit</button>
        <button onClick={this.cancel}>cancel</button>
        <button onClick={this.delete}>delete</button>
      </div>
    )
  }
}

export default BookCard;
