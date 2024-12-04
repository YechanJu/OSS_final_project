// App.js
import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  const fetchBooks = async () => {
    try {
      const response = await axios.get("https://dapi.kakao.com/v3/search/book", {
        headers: {
          Authorization: "KakaoAK d33a75edb2afb34d953f74cfe93dd89c",
        },
        params: {
          query: query,
          sort: "accuracy",
        },
      });
      setBooks(response.data.documents);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchBooks();
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Kakao Book Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: "10px", width: "300px" }}
        />
        <button type="submit" style={{ padding: "10px 20px", marginLeft: "10px" }}>
          Search
        </button>
      </form>
      <div style={{ marginTop: "20px" }}>
        {books.length > 0 ? (
          books.map((book, index) => (
            <div key={index} style={{ marginBottom: "15px" }}>
              <h2 style={{ margin: "5px 0" }}>{book.title}</h2>
              <p style={{ margin: "5px 0" }}>Author: {book.authors.join(", ")}</p>
              <img
                src={book.thumbnail}
                alt={book.title}
                style={{ width: "100px", height: "150px", objectFit: "cover" }}
              />
            </div>
          ))
        ) : (
          <p>No books found. Try searching for something!</p>
        )}
      </div>
    </div>
  );
};

export default App;

