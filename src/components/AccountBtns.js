import React from 'react';

const AccountBtns = () => {
  return (
    <div className='flex items-center font-medium'>
      {/* link btn */}
      
      <a className='hover:text-blue transition' href="mailto:jesusdesigner@outlook.com.br?body=My custom mail body">E-mail</a>
      {/* separator */}
      <span className='mx-6 text-white/20 font-thin'>|</span>
      {/* register btn */}
      <a className='hover:text-Green transition' href='https://api.whatsapp.com/send?1=pt_BR&phone=5585988452885'><button className='btn h-[52px] text-base px-8'>WhattsApp</button></a>
    </div>
  );
};

export default AccountBtns;
