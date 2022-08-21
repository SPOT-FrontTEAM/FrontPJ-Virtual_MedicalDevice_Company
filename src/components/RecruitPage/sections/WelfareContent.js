import React from 'react';
import welImg1 from './../../../utils/img/Recruit/welImg1.png';
import welImg2 from './../../../utils/img/Recruit/welImg2.png';

const WelfareContent = () => {
  return (
    <div className='WelfareContent'>
      <section className='sectionOne'>
          <article className='imgArea'>
            <img src={welImg1} alt={'wel'} />
          </article>
          <article className='contentArea'>
            <h2>직접적 보상</h2>
            <ul>
              <li>
                연봉제 : 연간 개인별 MBO를 토대로 업적과 역량에 따라 차등
                조정(Plus-sum 방식)
              </li>
              <li>
                성과급 : 조직단위 MBO를 토대로 목표 달성도에 따라 차등 지급
              </li>
              <li>
                특별 인센티브 : 회사의 핵심 인재에 대해 별도의 인센티브 지급
              </li>
            </ul>
          </article>
      </section>
      <section className='sectionTwo'>
        <article className='imgArea'>
          <img src={welImg2} alt={'wel'} />
        </article>
        <article className='contentArea'>
          <h2>간접적 보상</h2>
          <ul>
            <li>
              교육 : 직무별 전문가 또는 Biz, Leader로 육성하기 위한 교육 지원{' '}
            </li>
            <li>포상 : 회사의 발전에 기여한 공로에 의한 인정과 포상</li>
            <li>
              복리후생 : 회사 생활의 편의성과 가정생활의 안정성을 지원하는
              다양한 복리후생 제도 운영
            </li>
            <li>
              조직문화 : 도전정신과 열정이 충만하고 수평적 커뮤니케이션이
              존중되는 조직문화
            </li>
          </ul>
        </article>{' '}
      </section>
    </div>
  );
};

export default WelfareContent;
