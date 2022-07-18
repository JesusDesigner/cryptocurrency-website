import React from 'react';

// import components
import Logo from '../assets/img/logo.svg';
import Nav from './Nav';
import AccountBtns from './AccountBtns';

const Header = () => {
  return (
    <header
      className='py-[60px]'
      data-aos='fade-down'
      data-aos-duration='2000'
      data-aos-delay='900'
    >
      <div className='container mx-auto flex items-center justify-between'>
        <a href='#'>
          <img src={Logo} alt='' />
        </a>
        <div className='flex gap-x-[55px]'>
          <Nav />
          <AccountBtns />
        </div>
      </div>
    </header>
  );
};

export default Header;
