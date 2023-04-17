import React from 'react';

// import components
import NewsletterForm from '../components/NewsletterForm';

const Newsletter = () => {
  return (
    <section className='py-[40px] lg:py-[88px] bg-newsletter bg-cover'>
      <div className='container mx-auto'>
        <div
          className='flex flex-col lg:flex-row items-center justify-between bg-cccccc p-12 rounded-2xl lg:bg-newsletterBox lg:bg-no-repeat lg:h-[216px]'
          data-aos='fade-up'
          data-aos-offset='400'
        >
          {/* text */}
          <div className='flex-1 w-full'>
            <h1>Fale Comigo!</h1>
            <p className='max-w-[348px] mb-8'>
           Se você deseja aumentar o número de clientes ou precisa potencializar a presença da sua empresa na internet, solicite um orçamento sem compromisso.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
