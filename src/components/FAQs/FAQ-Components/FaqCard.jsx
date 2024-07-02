import { useState } from 'react'
import { ExpandMore, ExpandLess } from '@mui/icons-material'
import { IconButton } from '@mui/material'

const FaqCard = ({question, answer}) => {
  const [expand, setExpand] = useState(false);

  return (
    <div className='flex flex-col w-full mx-auto rounded-lg shadow-lg '>
        <div className='flex justify-between p-5 cursor-pointer' onClick={() => setExpand(!expand)}>
          <h4 className='font-semibold text-lg'>{question}</h4>
            {expand ? (
              <ExpandLess/>
            ) : (
              <ExpandMore/>
            )}
        </div>
        {!expand ? (
         null
        ) : (
          <p className='text-lg mx-5'>{answer}</p>
        )}
    </div>
  )
}

export default FaqCard
