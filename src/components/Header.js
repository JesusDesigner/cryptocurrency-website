import React from 'react';

// import components
import Logo from '../assets/img/logo.svg';
import Nav from './Nav';
import AccountBtns from './AccountBtns';

// import icons
import { CgMenuRight } from 'react-icons/cg';

const Header = ({ setNavMobile }) => {
  return (
    <header
      className='py-[30px] lg:py-[60px]'
      data-aos='fade-down'
      data-aos-duration='2000'
      data-aos-delay='900'
    >
      <div className='container mx-auto flex items-center justify-between'>
        {/* logo */}
        <a href='#'>
          <img src={Logo} alt='' />
        </a>
        <div className='hidden lg:flex gap-x-[55px] '>
          <Nav />
          <AccountBtns />
        </div>
        {/* nav menu btn */}
        <div
          onClick={() => setNavMobile(true)}
          className='lg:hidden cursor-pointer'
        >
          <CgMenuRight className='text-2xl' />
        </div>
      </div>
    </header>
  );
};

export default Header;
