import React, { useEffect, useState } from 'react';

// import aos (animate on scroll)
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import Hero from './components/Hero';
import Header from './components/Header';
import NavMobile from './components/NavMobile';

const App = () => {
  const [navMobile, setNavMobile] = useState(false);
  // aos initialization
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });
  return (
    <div className='container mx-auto'>
      <Header setNavMobile={setNavMobile} />
      <Hero />

      {/* nav mobile */}
      <div
        className={`${
          navMobile ? 'right-0' : '-right-full'
        } fixed bg-violet h-full top-0 w-96 transition-all duration-200`}
      >
        <NavMobile />
      </div>
      <div className='h-[2000px]'></div>
    </div>
  );
};

export default App;
