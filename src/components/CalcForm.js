import React from 'react';

const CalcForm = () => {
  return (
    <div
      className='w-full max-w-[942px] bg-white mx-auto rounded-2xl text-darkblue p-12'
      data-aos='fade-up'
      data-aos-offset='500'
    >
      <form className='flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-12 lg:space-y-0'>
        <input
          className='input'
          type='text'
          placeholder='Enter your hash rate'
        />
        <select className='select'>
          <option value=''>TH/s</option>
          <option value=''>H/s</option>
          <option value=''>KH/s</option>
          <option value=''>MH/s</option>
          <option value=''>GH/s</option>
        </select>
        <button className='btn text-white px-8 flex self-start'>
          Calculate
        </button>
      </form>
    </div>
  );
};

export default CalcForm;
