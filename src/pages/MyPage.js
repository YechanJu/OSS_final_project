import React, { useState } from 'react';

const MyPage = () => {
  const [wishlist, setWishlist] = useState([]);

  const removeBook = (id) => {
    setWishlist(wishlist.filter((book) => book.id !== id));
  };

  return (
    <div>
      <h1>My Page</h1>
      {wishlist.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <button onClick={() => removeBook(book.id)}>삭제</button>
        </div>
      ))}
    </div>
  );
};

export default MyPage;
