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

  changeShelf = (book,newshelf,update) => {
    BooksAPI.update(book, newshelf)
    if(update){
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      })
    }
    // this.setState((state) => ({
    //   books: state.books.filter((c) => c.id !== book.id)
    // }))
    // BooksAPI.update(book, newshelf)
    // this.setState({
    //
    // })
  }

  changeSearch = (query) => {
    BooksAPI.search(query).then((books) => {
      this.setState({ books })
    })

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
          <SearchBook
            onChangeShelf={this.changeShelf}
            onSearch={this.changeSearch}
            books={this.state.books}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
