import React from 'react';
import Divide from '../_Common/Divide';
import Greeting from '../_Common/Greeting';
import Nav from '../_Common/Nav/Nav';
import TitleImg from '../_Common/TilteImg/TitleImg';
import QuoteBox from './sections/QuoteBox';
import management from './../../utils/img/Recruit/management.png';
import './sections/RecruitPage.css';
import WelfareContent from './sections/WelfareContent';

import imgOne from '../../utils/img/welfare/welfare1.png';
import imgTwo from '../../utils/img/welfare/welfare2.png';

const Welfare = () => {
  const title = '복리후생';
  const type = 'Recruit';
  const section = '복리후생';
  const greeting = '항상 뜨거운 가슴을 충전합니다.';
  const btitle = 'Work & Life Balance';
  const content =
    '최적의 보상을 위해 직접적인 보상(Direct Compensation)과 간접적인 보상(Indirect Compensation)의 적절한 조화를 통해 총보상(Total Compensation)의 측면에서 각 구성원의 삶과 질 향상과 성장을 지원합니다.';
  const subTitle = '복리후생 제도 (Work & Life Balance)';
  return (
    <div className='Welfare'>
      <Nav />
      <TitleImg title={title} type={type} />
      <Divide division={type} section={section} />
      <Greeting title={greeting} btitle={btitle} />
      <QuoteBox content={content} />
      <WelfareContent />
      <Greeting title={subTitle} />
      <section className='WelSubContent'>
        <img src={imgOne} alt='wel1' />
        <img src={imgTwo} alt='wel2' />
      </section>
    </div>
  );
};

export default Welfare;
