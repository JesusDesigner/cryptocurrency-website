import React from 'react';

// import data
import { navData } from '../data';

// import icons
import { CgClose } from 'react-icons/cg';

const NavMobile = ({ setNavMobile }) => {
  return (
    <nav className='flex lg:hidden bg-violet h-full top-0 bottom-0 w-96'>
      {/* close btn */}
      <div onClick={() => setNavMobile(false)} className='cursor-pointer'>
        <CgClose className='text-2xl' />
      </div>
      {/* menu list */}
      <ul>
        {navData.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
