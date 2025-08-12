import React, { useState, useRef, useEffect } from 'react';
import { svgIcons } from '@assets/images/icons/image.js';
import SearchBar from './components/SearchBar';
import useMediaQuery from './components/MediaQuery';
import './header.css';

const Header = () => {
  const isMobile = useMediaQuery('(max-width: 1025px)');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  
  
  return (
    <div className='flex grow gap-x-6 px-5 tablet:justify-between phone:justify-between py-5'>
      <button className='flex items-center justify-center'>
        <svgIcons.MenuOutline className='w-8 h-8 desktop:w-6 desktop:h-6 phone:w-7 phone:h-7 hover:fill-sky-400'/>
      </button>
      
      <button className='flex items-center justify-center'>
        <svgIcons.BagSolid className='w-8 h-8 desktop:w-6 desktop:h-6 phone:w-7 phone:h-7 hover:fill-sky-400' />
      </button>
      
      <button className='flex items-center justify-center'>
        <svgIcons.HeartFilled className='w-8 h-8 desktop:w-6 desktop:h-6 phone:w-7 phone:h-7 hover:fill-sky-400' />
      </button>
      
      <button className='flex items-center justify-center'>
        <svgIcons.User className='w-8 h-8 desktop:w-6 desktop:h-6 phone:w-7 phone:h-7 hover:fill-sky-400' />
      </button>

      <button className='flex items-center justify-center' onClick={toggleSearch}>
          <svgIcons.SearchSolid className='w-8 h-8 desktop:w-6 desktop:h-6 phone:w-7 phone:h-7 hover:fill-sky-400' />
      </button>
      <SearchBar
      isSearchOpen={isSearchOpen} 
      toggleSearch={toggleSearch}
      isMobile={isMobile}
      />
    </div>
  );
};

export default Header;