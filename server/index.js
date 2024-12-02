const express = require('express');
const path = require('path');
const axios = require('axios'); // axios 사용

const app = express();
const PORT = process.env.PORT || 5000;

// Naver API 정보 (하드코딩)
const NAVER_CLIENT_ID = 'GzKlFcieggCWnMGo5lNx';
const NAVER_CLIENT_SECRET = 'bROf2G5bUW';

// React 정적 파일 서빙
app.use(express.static(path.join(__dirname, '../build')));

// API 프록시 라우트
app.get('/api/search', async (req, res) => {
  const query = req.query.query; // 클라이언트에서 전달된 검색어
  const url = `https://openapi.naver.com/v1/search/book.json?query=${encodeURIComponent(query)}&display=10`;

  try {
    const response = await axios.get(url, {
      headers: {
        'X-Naver-Client-Id': NAVER_CLIENT_ID,
        'X-Naver-Client-Secret': NAVER_CLIENT_SECRET,
      },
    });
    res.json(response.data); // 클라이언트로 데이터 반환
  } catch (error) {
    console.error('API 호출 오류:', error.message);
    res.status(500).json({ error: 'Naver API 호출 중 문제가 발생했습니다.' });
  }
});

// React 앱 서빙 (라우팅 지원)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT}에서 실행 중입니다.`);
});
