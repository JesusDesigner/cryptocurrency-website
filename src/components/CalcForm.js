import React from 'react';
import Logo from '../assets/img/logo.png';
import cliente01Img from '../assets/img/cliente01.png';
import cliente02dImg from '../assets/img/cliente02.png';
import cliente03Img from '../assets/img/cliente03.png';
import cliente04Img from '../assets/img/cliente04.png';
import rocket from '../assets/img/rocket.png';

const CalcForm = () => {
  return (
    <div
      className='w-full bg-white max-w-[942px] mx-auto rounded-2xl text-darkblue p-12 shadow-primary'
      data-aos='fade-up'
      data-aos-offset='500'
    
    ><div className='text-[32px] font-bold mb-3'> <img src={rocket} alt='' />
  Soluções de marketing e integrações que você necessita para promover seu site e atrair mais visitantes.  <span className='text-blue font-bold'>Aqui você decola!</span>
  </div>  <h1>Outros clientes já conquistaram resultados incríveis e você também vai conseguir</h1>
    <div className='text-blue font-bold mb-4 items-center'>
    
   </div>
      {/* text */}
      <div className='mt-24'>
        <div className='text-blue font-bold mb-4 items-center'>
        <h2>Clientes: </h2> 
        </div>
        <div className='text-gray-900 tracking-[1%]'>
         <h1> Gratidão! Sou muito grato por poder contar com você nesta caminhada. Obrigado por nos ter como referência de qualidade e atendimento. Estamos sempre em evolução para melhor atendê-lo.</h1>
        </div>
        <div className='flex flex-col flex-1'>
            <div className='lg:ml-[100px] flex flex-col flex-1'>
                           <div className='flex justify-center items-center gap-8'>
                <img src={cliente01Img} alt='' />
                <img src={cliente02dImg} alt='' />
                <img src={cliente03Img} alt='' />
                <img src={cliente04Img} alt='' />
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default CalcForm;
