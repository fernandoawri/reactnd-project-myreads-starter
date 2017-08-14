import React, { Component } from 'react'
import Books from './Books'
import { Link } from 'react-router-dom'

class SearchBooks extends Component {
  render(){
    const { searchResults, searchBooks } = this.props
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author ex:Android"
              onChange={(event) => searchBooks(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <h4 className="list-no-books-title"> {searchResults.length} matches </h4>
          <Books
            key="search"
            shelf="Search results"
            books={searchResults}
            onChangeShelf={(book, shelf) => {
              this.props.onChangeShelf(book, shelf)
            }}
            showBookDetails={(book) => {
              this.props.showBookDetails(book)
            }}
          />
        </div>
      </div>
    )
  }
}

export default SearchBooks
