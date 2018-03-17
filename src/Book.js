import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired
  }

  state = {
    book: this.props.book,
    shelf: this.props.book.shelf
  }

  // updateShelf = (newshelf) => {
  //   console.log('Before: ' + this.state.shelf)
  //   this.setState({
  //     shelf: newshelf
  //   })
  //   console.log('After: ' + this.state.shelf)
  //   this.props.onChangeShelf(this.state.book, this.state.shelf)
  // }

  render(){

    const { book, onChangeShelf } = this.props

    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select onChange={(event) => onChangeShelf(book, event.target.value)} value={this.state.shelf}>
                {/* {() => onChangeShelf(book,'wantToRead')} */}
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading" >Currently Reading</option>
                <option value="wantToRead" >Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    )
  }


}

export default Book;
