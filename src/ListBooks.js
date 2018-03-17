import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import Book from './Book'

class ListBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }



  render(){

    const { books } = this.props

    let currentlyReadingBooks, wantToReadBooks, readBooks

    const match_1 = new RegExp(escapeRegExp('currentlyReading'), 'i')
    currentlyReadingBooks = books.filter((book) => match_1.test(book.shelf))

    const match_2 = new RegExp(escapeRegExp('wantToRead'), 'i')
    wantToReadBooks = books.filter((book) => match_2.test(book.shelf))

    const match_3 = new RegExp(escapeRegExp('read'), 'i')
    readBooks = books.filter((book) => match_3.test(book.shelf))

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">

                  {currentlyReadingBooks.map((book) => (
                    <Book key={book.id}
                      book={book}
                      onChangeShelf={this.props.changeShelf}
                    />
                  ))}

                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">

                  {wantToReadBooks.map((book) => (
                    <Book key={book.id}
                      book={book}
                    />
                  ))}

                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {readBooks.map((book) => (
                    <Book key={book.id}
                      book={book}
                    />
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link
            to="/search"
          >Add a book</Link>
        </div>
      </div>
    )
  }

}

export default ListBooks;
