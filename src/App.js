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

    if (book.shelf !== newshelf) {
      BooksAPI.update(book, newshelf).then(() => {
        book.shelf = newshelf
        this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat([ book ])
        }))
      })
    }
  }

  changeSearch = (query) => {
    BooksAPI.search(query).then((books) => {
      //console.log('Books: ' + JSON.stringify(books))
      // if(books.length > 0){
        this.setState({ books })
      // }

    })

  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
    console.log('componentDidMount')
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
