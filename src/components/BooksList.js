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
  AddBooks=()=>{
    const bookList = this.state.books.map(({id,bookName,bookRating})=>{
      return <BookCard deleteBook={this.deleteBook} updateState={this.updateState} key={id} id={id} name={bookName}  rating={bookRating} />
    })
    return bookList
  }
  updateState=(id,bookName,bookRating)=>{
    let oldState = JSON.stringify(this.state.books);
    let newState = JSON.parse(oldState);
    newState[id-1].bookName = bookName
    newState[id-1].bookRating = bookRating
    this.setState({books:newState})
  }
  deleteBook = (id)=>{
    const books = this.state.books.filter((el) => el.id !== id);
    this.setState({ books });
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


