import React from 'react';

// import components
import Logo from '../assets/img/logo.svg';

const Header = () => {
  return (
    <header
      className='py-[60px]'
      data-aos='fade-down'
      data-aos-duration='2000'
      data-aos-delay='900'
    >
      <div className='container mx-auto'>
        <a href='#'>
          <img src={Logo} alt='' />
        </a>
      </div>
    </header>
  );
};

export default Header;
