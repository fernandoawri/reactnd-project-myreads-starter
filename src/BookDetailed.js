import React, { Component } from 'react'

class BookDetailed extends Component {
  render(){
    const { book} = this.props
    return(
      <div>
        {book.title && (
          <li key={book.id} >
            <div className="book-details">
              <h1>{book.title}</h1>
              <h2 className="book-authors">{book.authors ? book.authors.join(', '): ''}</h2>
              <div className="book-content-details">
                <a href={book.previewLink} target="_blank">
                  <div className="book-cover" style={{backgroundImage: `url("${book.imageLinks !== undefined? book.imageLinks.thumbnail:''}")` }}></div>
                  <p>Preview</p>
                </a>
                <div className="content-details">
                  <p><b>Shelf:</b> {book.shelf && (book.shelf)}</p>
                  <p><b>Categories:</b> {book.categories ? book.categories.join(', '): ''}</p>
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
    )
  }
}

export default BookDetailed
