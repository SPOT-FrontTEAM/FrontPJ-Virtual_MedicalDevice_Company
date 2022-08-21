import React from 'react';
import LandingInfoTitle from './LandingInfoTitle';

import icon1 from '../../../utils/img/LandingIcon/recruit_btn_icon01.png';
import icon2 from '../../../utils/img/LandingIcon/recruit_btn_icon02.png';
import icon3 from '../../../utils/img/LandingIcon/recruit_btn_icon03.png';
import icon4 from '../../../utils/img/LandingIcon/recruit_btn_icon04.png';
import icon5 from '../../../utils/img/LandingIcon/recruit_btn_icon05.png';

const LandingRecruitSection = () => {
  const content = '당신의 꿈과 희망을 삼성메디슨에서 실현 하십시오.';
  const title = '인재채용';
  return (
    <div>
      <LandingInfoTitle
        title={title}
        content={content}
        className='sectionTitle'
      />
      <section>
        <img src={icon1} alt='icon' />
        <img src={icon2} alt='icon' />
        <img src={icon3} alt='icon' />
        <img src={icon4} alt='icon' />
        <img src={icon5} alt='icon' />
      </section>
    </div>
  );
};

export default LandingRecruitSection;
