import React from 'react';
import Hero from './components/Hero/Hero';
import Testimonials from './components/Testimonials/Testimonials';
import Amenities from './components/Amenities/Amenities';
import Units from './components/Units/Units';
import Contact from './components/Contact/Contact';
import '../src/assets/fonts/fonts.css';

const App = () => {
  return (
    <div className="w-full flex flex-col mb-10 overflow-x-hidden">
      <Hero />
      <div className='max-w-screen-xl mx-auto flex flex-col justify-center items-center phone:max-w-xs tablet:max-w-none'>
        <Amenities />
        <Testimonials />
        <Units />
        <Contact />
      </div>
      <footer className='flex flex-col mt-10 items-center justify-center'>
        <p className='font-bold'>Copyright © Midz Homestay 2024</p>
        <span><b>Designed by:</b> ✨ Marcus Andre Geñorga </span>
      </footer>
    </div>
  );
};

export default App;
