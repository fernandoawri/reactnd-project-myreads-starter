import React, { Component } from 'react'
import BookDetailed from './BookDetailed'
import { Link } from 'react-router-dom'

class BookDetails extends Component {
  render(){
    const { book } = this.props
    return(
      <div className="list-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" value="Book Details" className="book-details-top-title" disabled />
          </div>
        </div>
        <div className="list-books-content">
          <BookDetailed book={book} />
        </div>
        <div className="open-search">
          <Link to="/search" className="add-contact">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BookDetails
