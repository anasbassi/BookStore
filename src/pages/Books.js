import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import FormAdd from '../components/FormAdd';
import { fetchBookApi } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookApi());
  }, [dispatch]);

  return (
    <div className="container">
      {books.map((book) => (
        <Book key={book.id} id={book.id} title={book.title} author={book.author} />
      ))}
      <hr />
      <FormAdd />
    </div>
  );
};

export default Books;
