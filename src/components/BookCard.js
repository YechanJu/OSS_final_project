import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BookCard.css';

const BookCard = ({ book }) => {
  const navigate = useNavigate();

  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} />
      <div>
        <h3>{book.title}</h3>
        <button onClick={() => navigate(`/detail/${book.isbn}`)}>자세히</button>
      </div>
    </div>
  );
};

export default BookCard;
