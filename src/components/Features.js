import React from 'react';

// import images
import Image1 from '../assets/img/feature-1-img.png';

const Features = () => {
  return (
    <section className='section bg-violet'>
      <div className='container mx-auto'>
        <div className='text-center max-w-[758px] mx-auto mb-24'>
          <h2
            className='section-title'
            data-aos='fade-up'
            data-aos-offset='400'
          >
            Market sentiments, portfolio, and run the infrastructure of your
            choice
          </h2>
        </div>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <div
            className='max-w-[454px] mb-6 lg:mt-10'
            data-aos='fade-right'
            data-aos-offset='400'
          >
            <h3 className='h3 mb-6'>Invest Smart</h3>
            <p className='text-gray mb-8'>
              Get full statistic information about the behaviour of buyers and
              sellers will help you to make the decision.
            </p>
            <button className='btn px-8'>Learn more</button>
          </div>
          {/* image */}
          <div
            className='flex-1 flex justify-end'
            data-aos='fade-left'
            data-aos-offset='400'
          >
            <img src={Image1} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
