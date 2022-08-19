import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookApi } from '../redux/books/books';

const Book = (props) => {
  const { id, title, author } = props;

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeBookApi(id));
  };

  return (
    <div>
      <p>{title}</p>
      <p>{author}</p>
      <button type="button" onClick={handleClick}>Delete</button>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
