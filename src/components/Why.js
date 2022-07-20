import React from 'react';

// import images
import Image from '../assets/img/why-img.png';

const Why = () => {
  return (
    <section>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center lg:flex-row'>
          {/* image */}
          <div className='order-2 lg:order-1'>
            <img src={Image} alt='' />
          </div>
          {/* text */}
          <div className='order-1 lg:order-2'>
            <h2 className='section-title'>Why you should choose CRAPPO</h2>
            <p className='section-subtitle'>
              Experience the next generation cryptocurrency platform. No
              financial borders, extra fees, and fake reviews.
            </p>
            <button className='btn'>Learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
