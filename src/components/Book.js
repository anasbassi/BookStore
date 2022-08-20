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
    <div className="book">
      <div className="content">
        <div className="info">
          <p>Fiction</p>
          <h2>{title}</h2>
          <h4>{author}</h4>
          <div className="buttons">
            <button className="button" type="button">Comment |</button>
            <button className="button" type="button" onClick={handleClick}>Delete |</button>
            <button className="button" type="button">Edit</button>
          </div>
        </div>
        <div className="progress-container">
          <div className="circular-progress-container">
            <div className="circular-progress" />
          </div>
          <div>
            <p className="percent-complete">64%</p>
            <p className="completed">Completed</p>
          </div>
          <div className="progress-divider" />
          <div className="current-chapter-container">
            <div>
              <p>CURRENT CHAPTER</p>
              <p>Chapter 17</p>
            </div>
            <div>
              <button className="primary-button" type="button">
                UPDATE PROGRESS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
