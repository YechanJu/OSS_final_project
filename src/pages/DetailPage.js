import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBooks } from '../services/api';


const DetailPage = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
  
    useEffect(() => {
      const loadBook = async () => {
        const data = await fetchBooks(id);
        if (data && data.length > 0) {
          setBook(data[0]); // 첫 번째 검색 결과를 사용
        } else {
          console.error('책 정보를 찾을 수 없습니다.');
        }
      }; 
      loadBook();
    }, [id]);
  
    if (!book) return <p>Loading...</p>;
  
    return (
      <div>
        <h1>{book.title}</h1>
        <img src={book.image} alt={book.title} />
        <p>저자: {book.author}</p>
        <p>출판사: {book.publisher}</p>
        <p>출간일: {book.pubdate}</p>
        <p>{book.description}</p>
      </div>
    );
  };
  
  export default DetailPage;
