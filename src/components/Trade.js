import React from 'react';

// import data
import { currency } from '../data';
// import images
import BitconImg from '../assets/img/bitcon.png';
// import icons
import { IoIosArrowDroprightCircle } from 'react-icons/io';

const Trade = () => {
  return (
    <section className='section lg:pt-[320px] bg-gradient-to-b from-[#F8F9FB] to-[#FAFBFF] text-darkblue lg:-mt-[320px]'>
      <div className='container mx-auto'>
        <h2 className='section-title text-center mb-16'>
          Trade securely and market the high growth cryptocurrencies.
        </h2>
        {/* items */}
        <div className='flex flex-col gap-[45px] lg:flex-row'>
          {currency.map((item, index) => {
            // destructure item
            const { image, name, abbr, description } = item;
            return (
              // item
              <div
                className='w-full bg-white rounded-2xl py-12 px-6 shadow-primary hover:bg-violet hover:text-white transition duration-500'
                key={index}
              >
                <div className='flex flex-col justify-center items-center'>
                  {/* image */}
                  <img className='mb-12' src={image} alt='' />
                  {/* name */}
                  <div className='mb-4 flex items-center gap-x-2'>
                    <div className='text-[32px] font-bold'>{name}</div>
                    <div className='text-lg text-gray-400 font-medium'>
                      {abbr}
                    </div>
                  </div>
                  {/* description */}
                  <p className='mb-6 text-center'>{description}</p>
                  {/* btn */}
                  <button className='btn gap-x-6 pl-6 text-sm lg:h-16 lg:text-base text-white'>
                    Start mining
                    {/* btn icon */}
                    <IoIosArrowDroprightCircle className='text-2xl lg:text-3xl' />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Trade;
