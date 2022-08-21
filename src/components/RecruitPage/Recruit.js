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

  const [selection, setSelection] = useState([]);
  const selectHandler = (e) => {
    setSelection(e.target.value);
  };

  const selectCheck = () => {
    switch (selection) {
      case '신입채용':
        axios.get('/dummyData/RecruitPostData.json').then((res) => {
          const result = res.data.filter(
            (element) => element.type === 'newcomer'
          );
          const reverseRes = result.reverse();
          setPosts(reverseRes);
        });

        break;
      case '경력채용':
        axios.get('/dummyData/RecruitPostData.json').then((res) => {
          const result = res.data.filter(
            (element) => element.type === 'career'
          );
          const reverseRes = result.reverse();
          setPosts(reverseRes);
        });
        break;
      default:
        axios.get('/dummyData/RecruitPostData.json').then((res) => {
          const reverseRes = res.data.reverse();
          setPosts(reverseRes);
        });
    }
  };

  return (
    <div>
      <Nav />
      <TitleImg title={title} type={type} />
      <Divide division={type} section={section} />
      <div className='recruit-wrapper'>
        <div className='recruit-head'>
          <div className='left-area'>
            <h2>{`총 ${posts.length}건`}</h2>
          </div>
          <div className='right-area'>
            <select defaultValue={'전체'} onClick={selectHandler}>
              <option>전체</option>
              <option>신입채용</option>
              <option>경력채용</option>
            </select>
            <button className='rigth-btn' onClick={selectCheck}>
              검색
            </button>
          </div>
        </div>
        <div className='recruit-list'>
          <ul>
            <li className='num'>번호</li>
            <li className='type'>구분</li>
            <li className='title'>제목</li>
            <li className='date'>게시기간</li>
          </ul>
        </div>
        {posts.map((post, i) => {
          return <RecruitPost post={post} i={i + 1} key={post.postID} />;
        })}
      </div>
    </div>
  );
}

export default Recruit;
