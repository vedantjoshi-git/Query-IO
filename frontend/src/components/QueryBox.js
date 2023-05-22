import { Avatar } from '@material-ui/core'
import React from 'react';
import './css/QueryBox.css'
import { useSelector } from 'react-redux';
import { selectUser } from '../feature/userSlice';

const QueryBox = () => {
  const user = useSelector(selectUser);
  return (
    <div className='queryBox'>
      <div className='queryBox_info'>
        <Avatar src={user?.photo}/>
      </div>
      <div className='queryBox__query'>
        <p>What is your Question?</p>
      </div>
    </div>
  )
}

export default QueryBox