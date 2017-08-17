import React from 'react'

const BookDetailed = (props) => {
  const book = props.book
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
                <p><strong>Shelf:</strong> {book.shelf && (book.shelf)}</p>
                <p><strong>Categories:</strong> {book.categories ? book.categories.join(', '): ''}</p>
                <p><strong>Publisher:</strong> {book.publisher}</p>
                <p><strong>Published Date:</strong> {book.publishedDate}</p>
                <p><strong>Pages:</strong> {book.pageCount}</p>
                <p><strong>Language:</strong> {book.language}</p>
                <p><strong>Description:</strong> {book.description}</p>
              </div>
            </div>
          </div>
        </li>
      )}
    </div>
  )
}

export default BookDetailed
