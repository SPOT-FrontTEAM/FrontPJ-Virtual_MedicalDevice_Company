import React, { useState } from 'react';
import SiteMap from '../../_Common/Nav/sections/SiteMap';
import Portal from '../../../Portal';
import IrPostContent from './IrPostContent';

const IrPost = ({ title, date, content }) => {
  const [isShowing, setIsShowing] = useState(false);
  const openModal = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div className='IrPost' onClick={() => openModal(true)}>
      <h3 className='IrPostTitle'>{title}</h3>
      <span className='IrPostDate'>{date}</span>
      <Portal>
        {isShowing && (
          <IrPostContent
            closeModal={openModal}
            title={title}
            date={date}
            content={content}
          />
        )}
      </Portal>
    </div>
  );
};

export default IrPost;
