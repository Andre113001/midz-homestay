import React from 'react'

const Amenity = ({icon, text}) => {
  return (
    <div className='flex flex-col w-1/2 items-center p-5 rounded-md'>
      <div>
        {icon}
      </div>
      <h3 className='text-4xl'>
        {text}
      </h3>
    </div>
  )
}

export default Amenity;