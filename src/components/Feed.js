import React from 'react';
import QueryBox from './QueryBox';
import './css/feed.css';
import Post from './Post';

const Feed = () => {
  return (
    <div className='feed'>
      <QueryBox />
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}

export default Feed;