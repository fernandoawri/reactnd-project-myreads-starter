import React, { Component } from 'react'
import Books from './Books'
import { Link } from 'react-router-dom'

class MyBooks extends Component {
  render(){
    const { currentlyReading, wantToRead, read, onChangeShelf, showBookDetails } = this.props
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Books
              key="currentlyReading"
              shelf="Currently Reading"
              books={currentlyReading}
              onChangeShelf={onChangeShelf}
              showBookDetails={showBookDetails}
            />
            <Books
              key="wantToRead"
              shelf="Want to read"
              books={wantToRead}
              onChangeShelf={onChangeShelf}
              showBookDetails={showBookDetails}
            />
            <Books
              key="read"
              shelf="Read"
              books={read}
              onChangeShelf={onChangeShelf}
              showBookDetails={showBookDetails}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search" className="add-contact">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default MyBooks
