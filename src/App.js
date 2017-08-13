import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MyBooks from './MyBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import sortBy from 'sort-by'
import './App.css'

class BooksApp extends Component {
  state = {
    books: [],
    searchResults: [],
    updateStatus: ''
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
          searchResults.sort(sortBy('title'))
          this.setState(state => ({
            searchResults: searchResults
          }))
        }
      })
    } else {
      this.setState(state => ({
        searchResults: []
      }))
    }
  }

  onChangeShelf(book, shelf){
      BooksAPI.update(book, shelf).then((books) => {
        if(!books || books.error){
            alert(`An error occurred while updating '${book.title}' to shelf: ${shelf}`)
        } else {
          this.componentDidMount()
          if(!book.shelf){
            alert(`'${book.title}' added successfully to your reads.`)
          } else {
            alert(`'${book.title}' updated successfully to shelf: ${shelf}`)
          }
        }
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <MyBooks
            books={this.state.books}
            onChangeShelf={(book, shelf) => {
              this.onChangeShelf(book, shelf)
            }}
          />
        )}/>
        <Route path='/search' render={({ history }) => (
          <SearchBooks
            searchResults={this.state.searchResults}
            searchBooks={(query) => {
              this.searchBooks(query)
            }}
            onChangeShelf={(book, shelf) => {
              this.onChangeShelf(book, shelf)
            }}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
