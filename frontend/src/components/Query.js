import React from 'react';
import Header from './Header';
import SideBar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';
import './css/Query.css';

const Query = () => {
  return (
    <div className='query'>
    <Header />
    <div className='query__contents'>
      <div className='query__content'>
        <SideBar />
        <Feed />
        <Widget />
      </div>
    </div>
    </div>
  )
}

export default Query