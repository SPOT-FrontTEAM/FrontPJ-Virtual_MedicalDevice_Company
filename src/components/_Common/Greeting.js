import React from 'react';
import './Common.css'

const Greeting = ({title, btitle ,content}) => {
  return (
    <div className='Greeting'>
      {btitle && <h1 className='btitle'>{btitle}</h1>}
      <h1 className='title'>{title}</h1>
      <div className='v-line' />
    </div>
  );
};

export default Greeting;