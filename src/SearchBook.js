import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Book from './Book'

class SearchBook extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    if(query.length > 0){
      this.setState({ query })
      this.props.onSearch(query)
    }

  }

  clearQuery = () => {
    this.setState({
      query: ''
    })
  }

  changeShelf2 = (book,newshelf) => {
    this.props.onChangeShelf(book, newshelf, false)
  }

  render() {

    const { books } = this.props
    const { query } = this.state

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">

            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {(query.length > 0 && Array.isArray(books)) && (
            books.map((book) => (
              <Book key={book.id}
                book={book}
                onChangeShelf2={this.changeShelf2}
              />
            ))
          )}


          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBook;
