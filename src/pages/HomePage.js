import React, { useState } from 'react';
import { fetchBooks } from '../services/api';

const HomePage = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    const results = await fetchBooks(query);
    setBooks(results);
  };

  return (
    <div>
      <h1>네이버 책 검색</h1>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>검색</button>

      <div className="book-list">
        {books.map((book, index) => (
          <div key={index} className="book-item">
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.publisher}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
