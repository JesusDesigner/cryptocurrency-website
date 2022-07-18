import React from 'react';

const AccountBtns = () => {
  return (
    <div className='flex items-center font-medium'>
      <a className='hover:text-blue transition' href='#'>
        Login
      </a>
      <span className='mx-6 text-white/20 font-thin'>|</span>
      <button className='btn text-base px-8'>Register</button>
    </div>
  );
};

export default AccountBtns;
