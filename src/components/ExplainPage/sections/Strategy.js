import React from 'react';
import Nav from '../../_Common/Nav/Nav';
import TitleImg from '../../_Common/TilteImg/TitleImg';
import Divide from '../../_Common/Divide';
import CompanyIntroduceList from './CompanyIntroduceList';

const Strategy = () => {
  const check = '5';
  return (
    <div>
      <Nav />
      <TitleImg title='지속가능경영' type='Direction' />
      <CompanyIntroduceList check={check} />
      <Divide division='회사소개' section='지속가능경영' />
      <div className='strategy-back'>
        <div className='strategy-back1img'></div>
        <div className='strategy-back2img'></div>
        <div className='strategy-back3img'></div>
        <div className='strategy-back4img'></div>
        <div className='strategy-back5img'></div>
        <div className='strategy-back6img'></div>
      </div>
    </div>
  );
};

export default Strategy;
