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
      BooksAPI.update(book, shelf).then((books) => {
        if(!books || books.error){
          toast.error(`An error occurred while updating '${book.title}' to shelf: ${shelf}`)
        } else {
          this.componentDidMount()
          this.searchBooks(this.state.query)
          if(!book.shelf){
            toast(`'${book.title}' added successfully to your reads.`)
          } else {
            toast(`'${book.title}' updated successfully to shelf: ${shelf}`)
          }
        }
      })
  }

  showBookDetails(book){
    this.setState(state => ({
      currentBook: book
    }))
  }

  render() {
    const { books, searchResults, currentBook } = this.state;
    return (
      <div className="app">
        <Route exact path="/" render={({ history }) => (
          <MyBooks
            books={books}
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
