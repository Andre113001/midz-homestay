import React from 'react'
import Hero from './components/Hero/Hero';
import Testimonials from './components/Testimonials/Testimonials';
import Amenities from './components/Amenities/Amenities';
import Units from './components/Units/Units';
import Contact from './components/Contact/Contact';
import FAQs from './components/FAQs/FAQs';
import '../src/assets/fonts/fonts.css';

const App = () => {
  return (
    <div className="w-full gap-7 flex flex-col mb-10 overflow-x-hidden">
      <Hero />
      <div className='xl:max-w-screen-xl mx-auto'>
        <Amenities />
        <Testimonials />
        <Units />
        <Contact />
        {/* <FAQs /> */}
      </div>
      <footer className='flex flex-col mt-10 items-center justify-center'>
        <p className='font-bold'>Copyright © Midz Homestay 2024</p>
        <span><b>Designed by:</b> ✨ Marcus Andre Geñorga </span>
      </footer>
    </div>
  )
}

export default App
