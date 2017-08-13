import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class SearchBooks extends Component {

  render(){
    const { searchResults, searchBooks, onChangeShelf } = this.props

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author ex:Android"
              onChange={(event) => searchBooks(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
        <div >
          <h4 className="list-no-books-title"> {searchResults.length} matches </h4>
        </div>
          <ol className="books-grid">
            {searchResults.map((book) => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks !== undefined? book.imageLinks.thumbnail:''}")` }}></div>
                    <div className="book-shelf-changer">
                      <select value="none" onChange={(e) => onChangeShelf(book,e.target.value)}>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
