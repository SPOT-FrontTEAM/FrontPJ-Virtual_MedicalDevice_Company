import React from 'react';

const LandingPageSetList = () => {
  return (
    <div className='LandingPageSetList'>
      <div className='landingPage_Set-list'>
        <ul className='landingPage_Set-listitems'>
          <li>
            <img className='list-image' alt='list' src='images/list1.png'></img>
            <p>Ultrasound System </p>
          </li>
          <li>
            <img className='list-image' alt='list' src='images/list2.png'></img>
            <p>Digital Radiography</p>
          </li>
          <li>
            <img alt='list' className='list-image' src='images/list3.png'></img>
            <p>Portable CT</p>
          </li>
          <li>
            <img className='list-image' alt='list' src='images/list4.png'></img>
            <p>고객 문의</p>
          </li>
          <li>
            <img className='list-image' alt='list' src='images/list5.png'></img>
            <p>서비스 문의</p>
          </li>
        </ul>
      </div>
      <div className='connectNumber'>
        대표번호 02-2194-1000 서비스번호 1644-0550
      </div>
    </div>
  );
};

export default LandingPageSetList;
