import React from 'react';

// import data
import { navData } from '../data';

const NavMobile = () => {
  return (
    <nav className='flex lg:hidden'>
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
