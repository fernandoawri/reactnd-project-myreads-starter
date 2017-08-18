import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MyBooks from './MyBooks'
import SearchBooks from './SearchBooks'
import BookDetails from './BookDetails'
import * as BooksAPI from './BooksAPI'
import sortBy from 'sort-by'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import './App.css'

class BooksApp extends Component {
  state = {
    books: [],
    searchResults: [],
    query: '',
    currentBook: {}
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      books.sort(sortBy('title'))
      this.setState(state => ({
        books: books
      }))
    })
  }

  searchBooks(query) {
    if(query){
      BooksAPI.search(query.trim(),20).then(searchResults => {
        if(!searchResults || searchResults.error){
          this.setState(state => ({
            searchResults: []
          }))
        } else {
          for (let index = 0; index < searchResults.length; index++) {
            for(const book of this.state.books){
              if(book.title === searchResults[index].title){
                searchResults[index].shelf = book.shelf
              }
            }
          }
          searchResults.sort(sortBy('title'))
          this.setState(state => ({
            searchResults: searchResults,
            query: query
          }))
        }
      })
    }
  }

  onChangeShelf(book, shelf){
    if(book.shelf !== shelf){
      BooksAPI.update(book, shelf).then((books) => {
        if(!books || books.error){
          toast.error(`An error occurred while updating '${book.title}' to shelf: ${shelf}`)
        } else {
          book.shelf = shelf
          if(shelf === 'none'){
            this.removeBook(book)
          } else {
            this.addBook(book)
          }
          toast(`'${book.title}' updated successfully to shelf: ${shelf}`)
        }
      })
    }
  }

  showBookDetails(book){
    this.setState(state => ({
      currentBook: book
    }))
  }

  removeBook(book){
    const books = this.state.books.filter(b => b.title !== book.title)
    this.setState(state => ({
      books: books
    }))
  }

  addBook(book){
    const books = this.state.books.filter(b => b.title !== book.title).concat([ book ])
    this.setState(state => ({
      books: books
    }))
  }

  render() {
    const { books, searchResults, currentBook } = this.state
    const currentlyReading = books.filter(book => book.shelf === 'currentlyReading')
    const wantToRead = books.filter(book => book.shelf === 'wantToRead')
    const read = books.filter(book => book.shelf === 'read')

    return (
      <div className="app">
        <Route exact path="/" render={({ history }) => (
          <MyBooks
            currentlyReading={currentlyReading}
            wantToRead={wantToRead}
            read={read}
            onChangeShelf={(book, shelf) => {
              this.onChangeShelf(book, shelf)
            }}
            showBookDetails={this.showBookDetails}
          />
        )}/>
        <Route path="/search" render={({ history }) => (
          <SearchBooks
            searchResults={searchResults}
            searchBooks={(query) => {
              this.searchBooks(query)
            }}
            onChangeShelf={(book, shelf) => {
              this.onChangeShelf(book, shelf)
            }}
            showBookDetails={this.showBookDetails}
          />
        )}/>
        <Route path="/book-details" render={({ history }) => (
          <BookDetails book={currentBook} />
        )}/>
        <ToastContainer
          position="bottom-center"
          type="default"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
        />
      </div>
    )
  }
}

export default BooksApp
