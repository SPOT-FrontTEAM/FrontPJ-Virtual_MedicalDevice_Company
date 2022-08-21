import { React, useEffect } from 'react';
import TitleImg from '../_Common/TilteImg/TitleImg';
import Nav from '../_Common/Nav/Nav';
import Divide from '../_Common/Divide';
import './sections/ExplainPage.css';
const { kakao } = window;

const CompanyDirections = () => {
  // let direction = [
  //   { x: 37.536755, y: 127.132437 },
  //   { x: 37.612804700000225, y: 127.76448159999937 },
  //   { x: 36.09975019999974, y: 128.3893938999998 },
  // ];

  // let companyName = [
  //   "삼성메디슨 강동 사업장",
  //   "삼성메디슨 홍천 사업장",
  //   "삼성메디슨 구미 사업장",
  // ];

  // let address = [
  //   "서울시 강동구 천호대로 1077 이스트센트럴타워 삼성메디슨",
  //   "강원도 홍천군 남면 한서로 3366",
  //   "경북 구미시 공단로 244 (구)공단동 259번지",
  // ];
  const title = '오시는 길';
  const type = 'Direction';

  useEffect(() => {
    let container = document.getElementById('map');

    let options = {
      center: new kakao.maps.LatLng(37.536755, 127.132437),
      level: 3,
    };
    // 지도 생성
    var map = new kakao.maps.Map(container, options);

    var markerPosition = new kakao.maps.LatLng(37.536755, 127.132437);

    // 마커 생성
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);
  }, []);

  return (
    <div className='companyDirectionPage'>
      <Nav />
      <TitleImg title={title} type={type} />
      <Divide division='회사소개' section={title} />
      <div className='company'>
        <h1 className='companyName'>삼성메디슨 강동 사업장</h1>
        <div id='map' style={{ width: '100%', height: '450px' }}></div>
        <div className='companyAddress'>
          <h2>주소</h2>
          <p>서울시 강동구 천호대로 1077 이스트센트럴타워 삼성메디슨</p>
          <hr
            style={{
              borderTop: '1px dashed rgb(112, 110, 110)',
              maxWidth: '1250px',
            }}
          ></hr>
          <h2>찾아오시는 길</h2>
          <p>5호선 강동역, 1번 출구 앞</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyDirections;
