import React from 'react'
import Amenity from './Amenities-Components/Amenity'
import { Wifi, AcUnit, Groups2, Savings } from '@mui/icons-material'

const Amenities = () => {
  return (
    <div className='h-96 flex justify-center w-full items-center gap-5'>
      <Amenity icon={<Wifi sx={{fontSize: '5rem', color: '#539de3'}} />} text={"Free Wi-Fi"}/>
      <Amenity icon={<AcUnit sx={{fontSize: '5rem', color: '#539de3'}}/>} text={"Airconditioned"}/>
      <Amenity icon={<Groups2 sx={{fontSize: '5rem', color: '#539de3'}}/>} text={"Max of 12 pax"}/>
      <Amenity icon={<Savings sx={{fontSize: '5rem', color: '#539de3'}}/>} text={"Affordable"}/>
    </div>
  )
}

export default Amenities
