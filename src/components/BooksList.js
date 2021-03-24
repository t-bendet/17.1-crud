import React from 'react';
import MockApi from '../apis/MockApi'
import BookCard from './BookCard'


class BooksList extends React.Component {
  state = {books:[]}
  getBooks= async()=>{
    const response = await MockApi.get('/books')
    this.setState({books:response.data},()=>{
    })
  }
  handleSubmit = (e)=>{
  
  }
  AddBooks=()=>{
    const bookList = this.state.books.map(({id,bookName,bookRating})=>{
      return <BookCard key={id} name={bookName}  rating={bookRating} handleSubmit={this.handleSubmit}/>
    })
    return bookList
  }
  componentDidMount(){
    this.getBooks()
  }
  render(){
    return (
      <div>
        <h1>BooksList</h1>
        {this.state.books.length && this.AddBooks()}
      </div>
    )
  }
}

export default BooksList;


