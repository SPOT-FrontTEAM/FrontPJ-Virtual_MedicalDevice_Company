import React from 'react';
import LandingInfoTitle from './LandingInfoTitle';

import icon1 from '../../../utils/img/LandingIcon/recruit_btn_icon01.png';
import icon2 from '../../../utils/img/LandingIcon/recruit_btn_icon02.png';
import icon3 from '../../../utils/img/LandingIcon/recruit_btn_icon03.png';
import icon4 from '../../../utils/img/LandingIcon/recruit_btn_icon04.png';
import icon5 from '../../../utils/img/LandingIcon/recruit_btn_icon05.png';

const Tag = ({ num, tag }) => {
  return (
    <div className='Tag'>
      <h1>{num}</h1>
      <h3>{tag}</h3>
    </div>
  );
};

const LandingRecruitSection = () => {
  const content = '당신의 꿈과 희망을 삼성메디슨에서 실현 하십시오.';
  const title = '인재채용';

  const TagList = [
    ['01', '인재상'],
    ['02', '인사정책'],
    ['03', '인재육성'],
    ['04', '복리후생'],
    ['05', '채용공고'],
  ];

  return (
    <div className='LandingRecruit'>
      <LandingInfoTitle title={title} content={content} />
      <section className='recruitSection'>
        <article>
          <img src={icon1} alt='icon' />
          <Tag num={TagList[0][0]} tag={TagList[0][1]} />
        </article>
        <article>
          <img src={icon2} alt='icon' />
          <Tag num={TagList[1][0]} tag={TagList[1][1]} />
        </article>
        <article>
          <img src={icon3} alt='icon' />
          <Tag num={TagList[2][0]} tag={TagList[2][1]} />
        </article>
        <article>
          <img src={icon4} alt='icon' />
          <Tag num={TagList[3][0]} tag={TagList[3][1]} />
        </article>
        <article>
          <img src={icon5} alt='icon' />
          <Tag num={TagList[4][0]} tag={TagList[4][1]} />
        </article>
      </section>
    </div>
  );
};

export default LandingRecruitSection;
