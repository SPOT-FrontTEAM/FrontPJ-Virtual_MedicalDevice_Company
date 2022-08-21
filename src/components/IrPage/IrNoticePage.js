import React from 'react';
import Divide from '../_Common/Divide';
import Greeting from '../_Common/Greeting';
import Nav from '../_Common/Nav/Nav';
import TitleImg from '../_Common/TilteImg/TitleImg';
import IrContents from './sections/IrContents';
import './sections/IrPage.css';

const IrNoticePage = () => {
  const title = '주주 공지사항';
  const type = 'Ir';
  const section = '주주 공지사항';
  const divideType = 'notice';
  const greeting = '주주님의 성원에 감사드립니다.';

  return (
    <div className='IrPage'>
      <Nav />
      <TitleImg title={title} type={type} />
      <div className='IrWrapper'>
        <Divide division={type} section={section} />
        <Greeting title={greeting} />
        <IrContents type={divideType} />
      </div>
    </div>
  );
};

export default IrNoticePage;
