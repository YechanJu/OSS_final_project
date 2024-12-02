import React, { useState } from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ setQuery }) => {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    setQuery(input);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>검색</button>
    </div>
  );
};

export default SearchBar;
