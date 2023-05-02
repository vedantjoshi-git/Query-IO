import React from 'react';
import "./css/WidgetContent.css";
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

const WidgetContent = () => {
  return (
    <div className='widget__contents'>
        <div className='widget__content'>
            <DeveloperModeIcon/>
            <div className='widget__contentTitle'>
                <h5>App Developement</h5>
                <p>The best Mobile App Development Company</p>
            </div>
        </div>
    </div>
  )
}

export default WidgetContent