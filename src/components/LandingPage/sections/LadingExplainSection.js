import React from 'react';
import LandingInfoTitle from './LandingInfoTitle';

const LandingExplainSection = () => {
  const content =
    '메디슨은 혁신적 기술, 독특한 디자인을 겸비한 제품을 통해 인류 사회에 가치를 더할 수 있는 디지털 혁명의 선두에 있습니다.';
  const title = '회사소개';
  return (
    <div className='LandingExplainSection'>
      <LandingInfoTitle
        title={title}
        content={content}
        className='sectionTitle'
      />
      <section className='explainColum'>
        <div className='columBack colum1'>
          <div className='infoWrapper'>
            <div className='columInfo'>
              <h1>01</h1>
              <p>소개</p>
            </div>
          </div>
        </div>
        <div className='columBack colum2'>
          <div className='infoWrapper'>
            <div className='columInfo'>
              <h1>02</h1>
              <p>오시는 길</p>
            </div>
          </div>
        </div>
        <div className='columBack colum3'>
          <div className='infoWrapper'>
            <div className='columInfo'>
              <h1>03</h1>
              <p>문의하기</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingExplainSection;
