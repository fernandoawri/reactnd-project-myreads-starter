import React, { Component } from 'react'
import Books from './Books'
import { Link } from 'react-router-dom'

class MyBooks extends Component {
  render(){
    const { books } = this.props
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Books
              key="currentlyReading"
              shelf="currentlyReading"
              books={books.filter((book) => book.shelf === 'currentlyReading')}
              onChangeShelf={(book, shelf) => {
                this.props.onChangeShelf(book, shelf)
              }}
            />
            <Books
              key="wantToRead"
              shelf="wantToRead"
              books={books.filter((book) => book.shelf === 'wantToRead')}
              onChangeShelf={(book, shelf) => {
                this.props.onChangeShelf(book, shelf)
              }}
            />
            <Books
              key="read"
              shelf="read"
              books={books.filter((book) => book.shelf === 'read')}
              onChangeShelf={(book, shelf) => {
                this.props.onChangeShelf(book, shelf)
              }}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to='/search' className='add-contact'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default MyBooks
