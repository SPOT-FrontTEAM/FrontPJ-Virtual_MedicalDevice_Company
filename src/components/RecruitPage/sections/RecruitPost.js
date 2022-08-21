import React from 'react';

function RecruitPost({ post, i }) {
  return (
    <div className='recruitpost'>
      <div className='recruitpost-list'>
        <ul>
          <li className='num'>{i}</li>
          <li className='type'>{post.type}</li>
          <li className='title'>{post.title}</li>
          <li className='date'>{post.date}</li>
        </ul>
      </div>
    </div>
  );
}

export default RecruitPost;
