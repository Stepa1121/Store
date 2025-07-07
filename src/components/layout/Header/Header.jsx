import React from 'react';
import MenuImage from "@/assets/images/Icons/MenuOutline.svg"; // Используем алиас @

const Header = () => {
  return (
    <header className='grid grid-cols-12 col-start-1 col-end-13'>
      <div className='col-span-1 content-center justify-items-center'>
        <img src={MenuImage}/>
      </div>
    </header>
  )
};

export default Header;