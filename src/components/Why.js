import React from 'react';

// import images
import Image from '../assets/img/why-img.png';

const Why = () => {
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center gap-x-8 lg:flex-row'>
          {/* image */}
          <div
            className='order-2 lg:order-1'
            data-aos='fade-right'
            data-aos-offset='400'
          >
            <img src={Image} alt='' />
          </div>
          {/* text */}
          <div
            className='order-1 lg:order-2 max-w-[480px]'
            data-aos='fade-left'
            data-aos-offset='400'
          >
            <h2 className='section-title'>FORMAÇÃO</h2>
            <p className='section-subtitle'>
           <h1><ul>
              <li>Graduação tecnológica:
Web Design e Web Master, Universidade Vale do Acaraú.</li>
<li>Web Design: CEPEP.</li>
<li>CURSANDO Front-End: IWTRAINING/PIXELS.</li>
<li>Imersão de Design Gráfico: IWTRAINING/PIXELS</li>
<li>Imersão de Dayse UI: IWTRAINING/PIXELS</li>
<li>Imersão de UI/UX Design: DIGITAL COLLEGE</li>
<li>Imersão de InteligÊncia Emocional: MÉTODO EVO</li>
</ul>
</h1> 


            </p>
            <button className='btn px-6'>Saiba Mais </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
