import React from 'react';

const IrPost = ({title, date}) => {
  return (
    <div className='IrPost'>
      <h3 className='IrPostTitle'>{title}</h3>
      <span className='IrPostDate'>{date}</span>
    </div>
  );
};

export default IrPost;