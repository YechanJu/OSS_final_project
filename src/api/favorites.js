import axios from 'axios';

const API_URL = 'https://675d522afe09df667f65f39a.mockapi.io/Book'; // Mock API 주소

export const addToFavorites = async (book) => {
  try {
    const response = await axios.post(API_URL, book);
    return response.data;
  } catch (error) {
    console.error('찜 추가에 실패했습니다:', error);
    throw error;
  }
};

export const getFavorites = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('찜 목록을 가져오는데 실패했습니다:', error);
    throw error;
  }
};
