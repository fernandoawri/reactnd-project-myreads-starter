import React from 'react'

const Books = (props) => {
  const { books, onChangeShelf, shelf, showBookDetails } = props
  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id} >
              <div className="book">
                <div className="book-top">
                  <div className="book-cover"  onClick={(e) => showBookDetails(book)} style={{backgroundImage: `url("${book.imageLinks !== undefined? book.imageLinks.thumbnail:''}")` }}></div>
                  <div className="book-shelf-changer">
                    <select value={book.shelf ? book.shelf: 'none'} onChange={(e) => onChangeShelf(book,e.target.value)}>
                      <option value="none" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors ? book.authors.join(', '): ''}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
      {books.length === 0 && (
        <h4 className="list-no-mybooks-title">No books available</h4>
      )}
    </div>
  )
}

export default Books
