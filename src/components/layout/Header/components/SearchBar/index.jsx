import { useSpring, animated } from '@react-spring/web'
import { svgIcons } from '@assets/images/image'
import { useEffect, useRef } from 'react'; // Добавляем хуки
import './SearchBar.css'

const SearchBar = ({isSearchOpen, toggleSearch, isMobile}) => {
  const seacrhProps = useSpring({
    transform: isSearchOpen ? 'translateY(0%)' : 'translateY(-100%)',
    config: { duration: 1000 }
  });

  return (
    <animated.div className='fullscreen-element grid grid-cols-12 grid-rows-12 p-5' 
    style={{
    ...seacrhProps,
    pointerEvents: isSearchOpen ? 'auto' : 'none'
    }}>
      <div className='flex justify-center items-center row-start-1 col-start-12' onClick={toggleSearch}>
        <svgIcons.Cross className='w-8 h-8 desktop:w-6 desktop:h-6 phone:w-7 phone:h-7 fill-black hover:fill-sky-400'/>
      </div>
      {/* Иконка поиска */}
      <div className='flex justify-center items-center row-start-2 col-span-1'>
        <svgIcons.SearchGlass className='w-8 h-8 desktop:w-6 desktop:h-6 phone:w-7 phone:h-7 fill-black hover:fill-sky-400'/>
      </div>
      
      {/* Поле ввода и полоска */}
      <div className='relative col-span-10 col-start-2 row-start-2 flex items-center'>
        {/* Полоска снизу */}
        <div className='absolute bottom-0 left-0 right-0 h-[1px] bg-gray-300'></div>
        
        {/* Input (прозрачный, без фона и рамки) */}
        <input 
          className='w-full bg-transparent border-none outline-none text-black placeholder-gray-400 z-10'
          placeholder='Поиск...'
        />
      </div>
    </animated.div>
  )
};

export default SearchBar;