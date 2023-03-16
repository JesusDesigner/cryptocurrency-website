import React from 'react';
import Logo from '../assets/img/logo.png';
import cliente01Img from '../assets/img/cliente01.png';
import cliente02dImg from '../assets/img/cliente02.png';
import cliente03Img from '../assets/img/cliente03.png';
import cliente04Img from '../assets/img/cliente04.png';
const CalcForm = () => {
  return (
    <div
      className='w-full bg-white max-w-[942px] mx-auto rounded-2xl text-darkblue p-12 shadow-primary'
      data-aos='fade-up'
      data-aos-offset='500'
    >
     
      {/* text */}
      <div className='mt-24'>
        <div className='text-blue font-bold mb-4 items-center'>
         <h2>Clientes: </h2> 
        </div>
        <div className='text-[32px] font-bold mb-3'>
          Meu Contato: <span className='text-blue'>(85 98845-2885)</span>
        </div>
        <div className='text-gray-500 tracking-[1%]'>
         <h1> Gratidão! Sou muito grato por poder contar com você nesta caminhada. Obrigado por nos ter como referência de qualidade e atendimento. Estamos sempre melhorando para atendê-lo.</h1>
        </div>
        <div className='flex flex-col flex-1'>
            <div className='lg:ml-[80px]'>
                           <div className='flex justify-center items-center gap-6'>
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
