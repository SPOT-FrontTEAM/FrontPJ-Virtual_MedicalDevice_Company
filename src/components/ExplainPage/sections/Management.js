import React from 'react';
import Nav from '../../_Common/Nav/Nav';
import TitleImg from '../../_Common/TilteImg/TitleImg';
import Divide from '../../_Common/Divide';
import CompanyIntroduceList from './CompanyIntroduceList';

const Management = () => {
  const check = '4';

  return (
    <div>
      <Nav />
      <TitleImg title='준법경영' type='Direction' />
      <CompanyIntroduceList check={check} />
      <Divide division='회사소개' section='준법경영' />
      <div className='management-back'>
        <div className='management-back1img'></div>
        <div className='management-back2img'></div>
      </div>
    </div>
  );
};

export default Management;
