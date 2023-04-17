import React from 'react';

// import image
import Image1 from '../assets/img/feature-1-img.png';

const FeaturesSection1 = () => {
  return (
    <section className='pb-[30px] lg:pb-[120px] pt-0'>
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
        <div
          className='max-w-[454px] mb-6 lg:mt-10'
          data-aos='fade-right'
          data-aos-offset='400'
        >
          <h3 className='h3 mb-6'>Portal de Notícias</h3>
          <p className='text-gray mb-8'>
           Portal de Notícias do Bairro Dias Macedo, História, Notícias, reportagns.
           Resgatar a história de um povo, contada pelos próprios personagens ou por seus familiares e amigos.
          </p>
          <a className='hover:text-Green transition' href='https://diasmacedo.com.br/'><button className='btn h-[52px] text-base px-8'>Visitar o site</button></a>
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
    </section>
  );
};

export default FeaturesSection1;
