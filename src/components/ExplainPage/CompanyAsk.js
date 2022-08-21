import { React, useState } from 'react';
import Divide from '../_Common/Divide';
import Nav from '../_Common/Nav/Nav';
import TitleImg from '../_Common/TilteImg/TitleImg';
import Greeting from '../_Common/Greeting';
import CompanyIntroduceList from './sections/CompanyIntroduceList';
import './sections/ExplainPage.css';
import AskContents from './sections/AskContents';

const CompanyAsk = () => {
  let [title] = useState(['IR 문의', '채용문의', '기타문의']);
  let [contents] = useState(['IR에 관련된 ', '채용에 관련된', '기타']);
  return (
    <div>
      <Nav />
      <TitleImg title='문의하기' type='Direction' />
      <Divide division='회사소개' section='문의하기' />
      <Greeting title='삼성메디슨 홈페이지를 방문해 주셔서 감사합니다.' />
      <div className='ask-back'>
        <div className='ask-back1img'></div>
      </div>
      <div className='askList'>
        {title.map((a, i) => {
          return <AskContents i={i + 1} title={a} contents={contents[i]} />;
        })}
      </div>
    </div>
  );
};

export default CompanyAsk;
