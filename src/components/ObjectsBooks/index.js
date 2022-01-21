// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './objectsBooks.scss';

// == Composant
const ObjectsBooks = ({ books }) => (
  <div className="objectsBooks">
    <h1 className="objectsBooks-title">Bibliographie de George R. R. Martin</h1>
    <ul className="objectsBooks-list">
      {
      books.map((book) => (
        <div className="objectsBooks-items">
          <img className="objectsBooks-img" src={book.thumbnail} alt="couverture du livre" />
          <h1 className="objectsBooks-titleBook">{book.label}</h1>
        </div>
      ))
      }
    </ul>
  </div>
);

ObjectsBooks.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
// == Export
export default ObjectsBooks;
