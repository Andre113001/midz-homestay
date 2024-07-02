import React from 'react'

const Amenity = ({icon, text, subtext}) => {
  return (
    <div className='flex flex-col h-3/4 w-1/2 items-center p-5 rounded-md'>
      <div>
        {icon}
      </div>
      <h3 className='text-3xl text-center'>
        {text}
      </h3>
      {subtext ? (
        <p className='text-center w-1/2'>{subtext}</p>
      ): null}
    </div>
  )
}

export default Amenity;