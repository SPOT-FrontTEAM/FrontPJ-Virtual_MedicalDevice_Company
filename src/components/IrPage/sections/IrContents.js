import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from '../../_Common/Pagination';
import IrPost from './IrPost';
const IrContents = ({ type }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * 10;
  const limit = 12;

  useEffect(() => {
    fetchContentsData();
  }, []);
  const fetchContentsData = async () => {
    axios.get('/dummyData/IrBoardData.json').then((res) => {
      const result = res.data.filter((element) => {
        return element.type === type ? true : false;
      });
      const reverseRes = result.reverse();
      setPosts(reverseRes);
    });
  };

  return (
    <div className='IrContents'>
      <h3 className='contentsLen'>{`총 ${posts.length}건`}</h3>
      <div className='postSection'>
        {posts
          .slice(offset, offset + limit)
          .map(({ id, title, date, content }) => (
            <IrPost key={id} title={title} date={date} content={content} />
          ))}
      </div>
      <Pagination
        total={posts.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default IrContents;
