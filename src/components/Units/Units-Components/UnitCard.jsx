import { useState } from 'react';
import { motion } from 'framer-motion';

const UnitCard = ({ unitName, imgName, logo, newStatus, linkButtons }) => {
  const [newUnit, setNewUnit] = useState(newStatus);

  return (
    <motion.div 
      initial={{opacity: 0, y: 0}}
      whileInView={{opacity: 1, y: -10}}
      animate='visible'
      viewport={{
          amount: 'all',
          once: true
      }}
      className='relative phone:w-full tablet:w-1/2 tablet:h-[30rem] phone:h-[20rem] text-center rounded-lg overflow-hidden group shadow-xl'
    >
      {/* Image */}
      <div className='relative w-full h-full'>
        <img src={imgName} className='h-full w-full object-cover rounded-lg' alt={unitName} />
        {newUnit && (
          <div className='absolute top-0 right-0 left-0 z-20'>
            <h4 className='bg-blue-400 text-white rounded-lg opacity-80 font-bold p-2 text-center'>NEW!</h4>
          </div>
        )}
        {/* Overlay */}
        <div className='absolute inset-0 z-10 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
          <div className='text-white text-center w-1/2'>
            <img src={logo} alt='Logo' className='tablet:w-[100px] tablet:h-[100px] phone:w-[80px] phone:h-[80px] mx-auto mb-2 rounded-full object-cover' />
            <h3 className='tablet:text-2xl phone:text-lg font-bold mb-2'>{unitName}</h3>
            {linkButtons}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UnitCard;
