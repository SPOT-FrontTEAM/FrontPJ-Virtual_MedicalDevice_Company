import React, { useEffect, useState } from 'react';
import Divide from '../_Common/Divide';
import Nav from '../_Common/Nav/Nav';
import TitleImg from '../_Common/TilteImg/TitleImg';
import RecruitPost from './sections/RecruitPost';
import axios from 'axios';

function Recruit() {
  const title = '채용공고';
  const type = 'Recruit';
  const section = '채용공고';
  const count = 3;

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchContentsData();
  }, []);

  const fetchContentsData = async () => {
    axios.get('/dummyData/RecruitPostData.json').then((res) => {
      const reverseRes = res.data.reverse();
      setPosts(reverseRes);
    });
  };

  const [Selection, setSelection] = useState([]);
  const selectHandler = (e) => {
    setSelection(e.targat.value);
  };

  //   const selectCheck = () => {
  //     if (Selection === '신입채용') {
  //       axios.get('/dummyData/RecruitPostData.json').then((res) => {
  //         const result = res.data.filter(
  //           (element) => element.type === 'newcomer'
  //         );
  //         const reverseRes = result.reverse();
  //         setPosts(reverseRes);
  //       });
  //     } else {
  //       axios.get('/dummyData/RecruitPostData.json').then((res) => {
  //         const reverseRes = res.data.reverse();
  //         setPosts(reverseRes);
  //       });
  //     }
  //   };
  return (
    <div>
      <Nav />
      <TitleImg title={title} type={type} />
      <Divide division={type} section={section} />
      <div className='recruit-wrapper'>
        <div className='recruit-head'>
          <div className='left-area'>
            <h2>{`총 ${count}건`}</h2>
          </div>
          <div className='right-area'>
            <select defaultValue={'전체'} onChange={selectHandler}>
              <option>전체</option>
              <option>신입채용</option>
              <option>경력채용</option>
            </select>
            <button className='rigth-btn'>검색</button>
          </div>
        </div>
        <div className='recruit-list'>
          <ul>
            <li style={{ paddingRight: '0px' }}>번호</li>
            <li>구분</li>
            <li>제목</li>
            <li>게시기간</li>
          </ul>
        </div>
        {posts.map((post, i) => {
          <RecruitPost post={post} i={i + 1} />;
        })}
      </div>
    </div>
  );
}

export default Recruit;
