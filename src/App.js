import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBook from './SearchBook'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  changeShelf = (book,newshelf) => {
    console.log('book')
    // BooksAPI.update(book, newshelf)
    // BooksAPI.getAll().then((books) => {
    //   this.setState({ books })
    // })
    // this.setState((state) => ({
    //   books: state.books.filter((c) => c.id !== book.id)
    // }))
    // BooksAPI.update(book, newshelf)
    // this.setState({
    //
    // })
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks
            onChangeShelf={this.changeShelf}
            books={this.state.books}
          />
        )}/>
        <Route path="/search" render={() => (
          <SearchBook />
        )}/>
      </div>
    )
  }
}

export default BooksApp
