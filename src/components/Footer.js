import React from 'react';

// import images
import Logo from '../assets/img/logo.png';
import VisaImg from '../assets/img/visa.png';
import MastercardImg from '../assets/img/mastercard.png';
import BitcoinImg from '../assets/img/bitcoin.png';

// import icons
import {
  IoLogoYoutube,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoFacebook,
} from 'react-icons/io';

const Footer = () => {
  return (
    <footer className='lg:pt-24 pt-0' data-aos='fade-up' data-aos-offset='400'>
      <div className='container mx-auto lg:mb-24'>
        <div className='flex flex-col gap-12 lg:flex-row'>
          {/* logo */}
          <div className='flex-1 mx-auto lg:mx-0 mb-6 max-w-[285px]'>
            <a href='#'>
              <img src={Logo} alt='' />
            </a>
          </div>
          {/* link group */}
          <div className='flex flex-1 flex-col gap-16 lg:flex-row'>
            {/* link group */}
            <div className='text-center w-full lg:text-left'>
              <div className='text-xl font-medium mb-6'>Quick Links</div>
              <ul className='space-y-4 text-gray'>
                <li>
                  <a className='hover:text-blue transition' href='/'>
                    Home
                  </a>
                </li>
                <li>
                  <a className='hover:text-blue transition' href='/Portifolio'>
                    Portifólio
                  </a>
                </li>
                <li>
                  <a className='hover:text-blue transition' href='/Servicos'>
                    Serviços
                  </a>
                </li>
               
                <li>
                  <a className='hover:text-blue transition' href='Contato'>
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            {/* link group */}
            <div className='text-center w-full lg:text-left'>
              <div className='text-xl font-medium mb-6'>Links</div>
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
               
              </ul>
            </div>
          </div>
          {/* payment */}
          <div className='flex flex-col flex-1'>
            <div className='lg:ml-[80px]'>
              <h3 className='h3 font-medium text-center mb-10 lg:text-left'>
              Meu Contato: <br></br><span className='text-blue'>(85 98845-2885)</span>
              </h3>
              <div className='flex justify-center items-center gap-6'>
                <img src={VisaImg} alt='' />
                <img src={MastercardImg} alt='' />
                <img src={BitcoinImg} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* copy & social */}
      <div className='py-12'>
        <div className='container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0'>
          {/* copy text */}
          <div>&copy; 2023 D'JESUS DESIGNER. All rights reserved.</div>
          {/* social icons */}
          <div className='flex text-2xl gap-x-8'>
            <a className='hover:text-blue transition' href='https://www.youtube.com/@djesuspdm'>
              <IoLogoYoutube />
            </a>
            <a className='hover:text-blue transition' href='https://www.instagram.com/jesuspdm/'>
              <IoLogoInstagram />
            </a>
            <a className='hover:text-blue transition' href='https://www.facebook.com/djesus.portaldiasmacedo'>
              <IoLogoFacebook />
            </a>
            <a className='hover:text-blue transition' href='https://twitter.com/DJESUSDESIGNER'>
              <IoLogoTwitter />
            </a>
            <a className='hover:text-blue transition' href='https://www.linkedin.com/in/jesus-pereira-49ab0a103/'>
              <IoLogoLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
