import React from 'react';

const Greeting = ({title, content}) => {
  return (
    <div className='Greeting'>
      <h1 className='title'>{title}</h1>
      <div className='v-line' />
    </div>
  );
};

export default Greeting;