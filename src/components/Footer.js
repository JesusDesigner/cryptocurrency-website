import React from 'react';

// import images
import Logo from '../assets/img/logo.svg';

const Footer = () => {
  return (
    <footer className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col justify-between lg:flex-row'>
          {/* logo */}
          <div className='mx-auto lg:mx-0 mb-12'>
            <a href='#'>
              <img src={Logo} alt='' />
            </a>
          </div>
          {/* quick links */}
          <div className='text-center lg:text-left'>
            <div className='text-xl font-medium mb-6'>Quick Links</div>
            <ul className='space-y-4 text-gray'>
              <li>
                <a className='hover:text-blue transition' href='#'>
                  Home
                </a>
              </li>
              <li>
                <a className='hover:text-blue transition' href='#'>
                  Products
                </a>
              </li>
              <li>
                <a className='hover:text-blue transition' href='#'>
                  About
                </a>
              </li>
              <li>
                <a className='hover:text-blue transition' href='#'>
                  Features
                </a>
              </li>
              <li>
                <a className='hover:text-blue transition' href='#'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* resources */}
          <div className='text-center lg:text-left'>
            <div className='text-xl font-medium mb-6'>Resources</div>
            <ul className='space-y-4 text-gray'>
              <li>
                <a className='hover:text-blue transition' href='#'>
                  Download Whitepapper
                </a>
              </li>
              <li>
                <a className='hover:text-blue transition' href='#'>
                  Smart Token
                </a>
              </li>
              <li>
                <a className='hover:text-blue transition' href='#'>
                  Blockchain Explore
                </a>
              </li>
              <li>
                <a className='hover:text-blue transition' href='#'>
                  Crypto API
                </a>
              </li>
              <li>
                <a className='hover:text-blue transition' href='#'>
                  Interest
                </a>
              </li>
            </ul>
          </div>
          {/* payments */}
          <div>payments</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
