import React from 'react';

// import image
import Image2 from '../assets/img/feature-2-img.png';

const FeaturesSection2 = () => {
  return (
    <section className='py-[30px] lg:py-[120px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col justify-end items-center lg:flex-row'>
          {/* image */}
          <div
            className='flex-1 lg:absolute lg:left-0 order-2 lg:order-1'
            data-aos='fade-right'
            data-aos-offset='400'
          >
            <img src={Image2} alt='' />
          </div>
          {/* text */}
          <div
            className='flex-1 max-w-[456px]'
            data-aos='fade-left'
            data-aos-offset='400'
          >
            <h3 className='h3 mb-6'> Startup</h3>
            <p className='text-gray mb-8'>
            CONTABILIDADE ON DEMAND. Soluções sob demanda!
Para pessoas físicas, empreendedores e profissionais contábeis.
Escritório de Contabilidade Virtual. Faça Um Orçamento. Temos As Melhores Soluções Para Contabilidade da Sua Empresa.
            </p>
            <a className='hover:text-Green transition' href='http://ondemand.42web.io/'><button className='btn h-[52px] text-base px-8'>Visitar o site</button></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection2;
