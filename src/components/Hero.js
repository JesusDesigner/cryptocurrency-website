import React from 'react';

// import images
import Image from '../assets/img/hero-img.png';

// import icons
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import {
  IoLogoYoutube,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoFacebook,
} from 'react-icons/io';

const Hero = () => {
  return (
    <section>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center lg:flex-row'>
          {/* hero text */}
          <div className='flex-1'>
            {/* badge text */}
            
            {/* title */}
            <h1
              className='text-[32px] lg:text-[64px] font-bold leading-tight mb-6'
              data-aos='fade-down'
              data-aos-delay='500'
            >
              D'JESUS DESIGNER
            </h1>
            <p
              className='max-w-[440px] leading-relaxed mb-8'
              data-aos='fade-down'
              data-aos-delay='600'
            >
             Web designer especialista em criação de sites planejamento, desenvolvimento e realização de manutenção em sites e aplicações de Internet.
            </p><div className='py-12'>
        <div className='container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0'>
          
          {/* social icons */}
          <div className='flex text-2xl gap-x-8  '>
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
            
          </div>
          {/* hero image */}
          <div className='flex-1'>
            <img src={Image} alt='' data-aos='fade-up' data-aos-delay='600' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
