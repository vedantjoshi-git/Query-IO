import { Avatar } from '@material-ui/core'
import React from 'react';
import './css/QueryBox.css'

const QueryBox = () => {
  return (
    <div className='queryBox'>
      <div className='queryBox_info'>
        <Avatar/>
      </div>
      <div className='queryBox__query'>
        <p>What is your Question?</p>
      </div>
    </div>
  )
}

export default QueryBox