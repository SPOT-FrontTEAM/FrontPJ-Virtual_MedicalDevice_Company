import React from 'react';
import Divide from '../_Common/Divide';
import Greeting from '../_Common/Greeting';
import Nav from '../_Common/Nav/Nav';
import TitleImg from '../_Common/TilteImg/TitleImg';
import QuoteBox from './sections/QuoteBox';
import management from "./../../utils/img/Recruit/management.png"
import './sections/RecruitPage.css'

const Policy = () => {
  const title = "인사정책";
  const type = "Recruit";
  const section = "인사정책";
  const greeting = "열린 일터를 만들어 갑니다.";
  const btitle = "Medison의 긍지를 키우는"
  const content = "현재에 안주하지 않고 끊임없이 스스로에게 도전하고, 세계에 도전하고, 미래에 도전하는 Samsung Medison!삼성메디슨은 이들의 성취감과 능력 향상을 위해 역량중심의 채용부터 교육, 평가, 보상에 이르기까지각자의 전문성을 극대화시킬 수 있는 다양한 기회를 제공하고 있습니다."

  return (
    <div className='Policy'>
      <Nav />
      <TitleImg title={title} type={type}/>
      <Divide division={type} section={section} />
      <Greeting title={greeting} btitle={btitle}/>
      <QuoteBox content={content} />
      <img className='management' src={management} alr="manage" />
    </div>
  );
};

export default Policy;