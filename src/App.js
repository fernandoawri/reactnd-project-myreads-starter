import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MyBooks from './MyBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <MyBooks books={this.state.books} />
        )}/>
        <Route path='/search' render={({ history }) => (
          <SearchBooks books={this.state.books} />
        )}/>
      </div>
    )
  }
}

export default BooksApp
