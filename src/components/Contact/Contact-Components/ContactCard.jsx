import React from 'react'

const ContactCard = ({icon, content}) => {
  return (
    <div className='flex justify-start items-center gap-2 p-4 rounded-xl'>
      <div>
        {icon}
      </div>
      <h4 className='text-xl'>
        {content}
      </h4>
    </div>
  )
}

export default ContactCard
