import React from 'react';

// import icons
import { HiChartBar, HiUser, HiGlobe } from 'react-icons/hi';

const Stats = () => {
  return (
    <section className='pt-24' data-aos='fade-up' data-aos-delay='1200'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-6 lg:flex-row lg:justify-between'>
          {/* item */}
          <div className='flex items-center gap-x-6'>
            {/* item icon */}
            <div className='bg-white/10 w-20 h-20 rounded-full flex items-center justify-center text-blue text-2xl lg:text-4xl'>
              <HiChartBar />
            </div>
            {/* item text */}
            <div>
              <div className='text-2xl font-bold lg:text-[40px] lg:mb-2'>
             FRONT-END
              </div>
              <div className='text-gray'>HTML, CSS, JS, REACT</div>
            </div>
          </div>
          {/* item */}
          <div className='flex items-center gap-x-6'>
            {/* item icon */}
            <div className='bg-white/10 w-20 h-20 rounded-full flex items-center justify-center text-blue text-2xl lg:text-4xl'>
              <HiUser />
            </div>
            {/* item text */}
            <div>
              <div className='text-2xl font-bold lg:text-[40px] lg:mb-2'>
               CMS 
              </div>
              <div className='text-gray'>WORDPRESS, JOOMLA</div>
            </div>
          </div>
          {/* item */}
          <div className='flex items-center gap-x-6'>
            {/* item icon */}
            <div className='bg-white/10 w-20 h-20 rounded-full flex items-center justify-center text-blue text-2xl lg:text-4xl'>
              <HiGlobe />
            </div>
            {/* item text */}
            <div>
              <div className='text-2xl font-bold lg:text-[40px] lg:mb-2'>
                DESIGN GRÁFICO
              </div>
              <div className='text-gray'>MÍDIAS SOCIAIS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
