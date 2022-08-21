import React from 'react';
import { useNavigate } from 'react-router-dom';
import Portal from '../../../../Portal';

const SiteMap = ({ closeModal }) => {
  const navigate = useNavigate();

  return (
    <Portal>
      <div className='Map_BackGround'>
        <div className='SiteMap' onClick={(e) => e.stopPropagation()}>
          <div className='buttonArea'>
            <button onClick={closeModal}>CLOSE</button>
          </div>
          <div className='contentArea'>
            <section className='explainMap'>
              <h1>회사소개</h1>
              <div className='MapLine' />
              <h2>소개</h2>
              <ul>
                <li>- 기업개요</li>
                <li>- 연혁</li>
                <li>- 경영이념 및 핵심가치</li>
                <li>- 준법경영</li>
                <li>- 지속가능경영</li>
              </ul>
              <div className='MapLine' />
              <h2>오시는길</h2>
              <div className='MapLine' />
              <h2>문의하기</h2>
              <ul>
                <li>- IR 문의</li>
                <li>- 채용 문의</li>
                <li>- 기타 문의</li>
              </ul>
            </section>
            <section className='irMap'>
              <h1 onClick={() => navigate('/ir')}>IR</h1>
              <div className='MapLine' />
              <h2 onClick={() => navigate('/ir')}>경영정보</h2>
              <div className='MapLine' />
              <h2>주주 공지사항</h2>
            </section>
            <section className='recruitMap'>
              <h1>인재채용</h1>
              <div className='MapLine' />
              <h2>인재상</h2>
              <div className='MapLine' />
              <h2>인사정책</h2>
              <div className='MapLine' />
              <h2>인재육성</h2>
              <div className='MapLine' />
              <h2>복리후생</h2>
              <div className='MapLine' />
              <h2>채용공고</h2>
            </section>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default SiteMap;
