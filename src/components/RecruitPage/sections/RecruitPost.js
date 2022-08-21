import React from 'react';

function RecruitPost({ post, i }) {
  return (
    <div className='recruitpost'>
      <div className='recruitpost-list'>
        <ul>
          <li style={{ paddingRight: '0px' }}>{i}</li>
          <li>{post.type}</li>
          <li>{post.title}</li>
          <li>{post.date}</li>
        </ul>
      </div>
    </div>
  );
}

export default RecruitPost;
