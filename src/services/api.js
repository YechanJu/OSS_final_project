const API_URL = 'https://openapi.naver.com/v1/search/book.json';

const CLIENT_ID = 'GzKlFcieggCWnMGo5lNx';
const CLIENT_SECRET = 'bROf2G5bUW';

/**
 * 네이버 도서 API 호출
 * @param {string} query - 검색어
 * @returns {Promise<Array>} - 도서 목록 데이터
 */
export const fetchBooks = async (query) => {
  try {
    const response = await fetch(`${API_URL}?query=${encodeURIComponent(query)}&display=10`, {
      method: 'GET',
      headers: {
        'X-Naver-Client-Id': CLIENT_ID,
        'X-Naver-Client-Secret': CLIENT_SECRET,
      },
    });

    if (!response.ok) {
      throw new Error(`API 호출 실패: ${response.status}`);
    }

    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error('API 호출 중 오류 발생:', error.message);
    return [];
  }
};