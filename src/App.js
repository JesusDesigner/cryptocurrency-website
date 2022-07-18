import React, { useEffect } from 'react';

// import aos (animate on scroll)
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import Hero from './components/Hero';
import Header from './components/Header';

const App = () => {
  // aos initialization
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });
  return (
    <div className='container mx-auto'>
      <Header />
      <Hero />
    </div>
  );
};

export default App;
