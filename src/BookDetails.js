import React, { Component } from 'react'
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
          <div>
            {book.title && (
              <li key={book.id} >
                <div className="book-details">
                  <h1>{book.title}</h1>
                  <h2 className="book-authors">{book.authors.map((author) => `[${author}] `)}</h2>
                  <div className="book-content-details">
                    <a href={book.previewLink} target="_blank">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks !== undefined? book.imageLinks.thumbnail:''}")` }}></div>
                      <p>Preview</p>
                    </a>
                    <div className="content-details">
                      <p><b>Shelf:</b> {book.shelf && (book.shelf)}</p>
                      <p><b>Categories:</b> {book.categories && (book.categories.map((category) => `[${category}] `))}</p>
                      <p><b>Publisher:</b> {book.publisher}</p>
                      <p><b>Published Date:</b> {book.publishedDate}</p>
                      <p><b>Pages:</b> {book.pageCount}</p>
                      <p><b>Language:</b> {book.language}</p>
                      <p><b>Description:</b> {book.description}</p>
                    </div>
                  </div>
                </div>
              </li>
            )}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search" className="add-contact">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BookDetails
