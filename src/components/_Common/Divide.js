import React from 'react';
import icon from './../../utils/img/homeIcon.png'
import arrow from './../../utils/img/right.png'
import './Common.css'
const Divide = ({division , section}) => {
  return (
    <div className='Divide'>
      <img src={icon} />
      <img src={arrow} />
      <h3 className='division'>{division}</h3>
      <img src={arrow} />
      <h3 className='section'>{section}</h3>
    </div>
  );
};

export default Divide;