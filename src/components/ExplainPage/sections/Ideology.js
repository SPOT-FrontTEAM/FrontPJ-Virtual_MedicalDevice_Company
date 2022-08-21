import React from 'react';
import Nav from '../../_Common/Nav/Nav';
import TitleImg from '../../_Common/TilteImg/TitleImg';
import Divide from '../../_Common/Divide';
import CompanyIntroduceList from './CompanyIntroduceList';

const Ideology = () => {
  const check = '3';

  return (
    <div>
      <Nav />
      <TitleImg title='경영이념 및 핵심가치' type='Direction' />
      <CompanyIntroduceList check={check} />
      <Divide division='회사소개' section='경영이념 및 핵심가치' />
      <div className='ideology-back'>
        <div className='imgBlock'>
          <div className='ideology-back1img'></div>
          <div className='ideology-back1-2img'></div>
        </div>
        <div className='imgBlock'>
          <div className='ideology-back1-3img'></div>
          <div className='ideology-back1-4img'></div>
        </div>
        <div className='ideology-back2img'></div>
        <div className='ideology-back3img'></div>
      </div>
    </div>
  );
};

export default Ideology;
