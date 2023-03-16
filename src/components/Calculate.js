import React from 'react';

// import components
import CalcForm from './CalcForm';

const Calculate = () => {
  return (
    <section className='section'>
      <div className='container mx-auto'>
        {/* text */}
        <div className='text-center'>
          <h2
            className='section-title'
            data-aos='fade-up'
            data-aos-offset='400'
          >
            CRIE SEU WEBSITE!
          </h2>
          <p
            className='section-subtitle text-lg mb-16 max-w-[622px] mx-auto'
            data-aos='fade-up'
            data-aos-offset='450'
          >
           Se a intenção é valorizar a sua empresa, ter um site, com um domínio próprio, aumenta o valor percebido por seus clientes. As empresas que aparecem somente nas redes sociais, ainda passam a ideia de não profissionais, ou em início de atividade. 
          </p>
        </div>
        {/* form */}
        <CalcForm />
      </div>
    </section>
    
  );
};

export default Calculate;
