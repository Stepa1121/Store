import React from 'react';
import { svgIcons } from '../../../assets/images/image'
const Header = () => {
  return (
    <header className='grid grid-cols-12 col-start-1 col-end-13 tabletV:grid-cols-5 phone:grid-cols-5'>
      <div className='col-span-1 col-start-1 content-center justify-items-center'>
        <img src={svgIcons['MenuOutline']} className='h-1/5 tabletH:h-1/4 phone:h-1/3'/>
      </div>
      <div className='col-span-1 col-start-2 content-center justify-items-center'>
        <img src={svgIcons['BagSolid']} className='h-1/5 tabletH:h-1/4 phone:h-1/3'/>
      </div>
      <div className='col-span-1 col-start-3 content-center justify-items-center'>
        <img src={svgIcons['HeartFilled']} className='h-1/5 tabletH:h-1/4 phone:h-1/3'/>
      </div>
      <div className='col-span-1 col-start-4 content-center justify-items-center'>
        <img src={svgIcons['User']} className='h-1/5 tabletH:h-1/4 phone:h-1/3'/>
      </div>
      <div className='col-span-1 col-start-5 content-center justify-items-center'>
        <img src={svgIcons['SearchSolid']} className='h-1/5 tabletH:h-1/4 phone:h-1/3'/>
      </div>
    </header>
  )
};

export default Header;