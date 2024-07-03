import React from 'react'

const Amenity = ({icon, text, subtext}) => {
  return (
    <div className='flex flex-col h-3/4 w-1/2 items-center text-center p-5 rounded-md'>
      <div>
        {icon}
      </div>
      <h3 className='tablet:text-2xl phone:text-sm  text-center'>
        {text}
      </h3>
      {subtext ? (
        <p className='text-center  tablet:text-[1rem] phone:text-xs'>{subtext}</p>
      ): null}
    </div>
  )
}

export default Amenity;