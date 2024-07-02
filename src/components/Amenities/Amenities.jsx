import React from 'react'
import Amenity from './Amenities-Components/Amenity'
import { 
    Wifi, 
    AcUnit, 
    Groups2, 
    Savings, 
    Tv, 
    Bathtub,
    DirectionsCar,
    Flatware,
    RiceBowl,
    OutdoorGrill,
    TableRestaurant
} from '@mui/icons-material'

const Amenities = () => {

    const amenityStyle = {
        fontSize: '3rem', 
        color: '#539de3'
    }

    return (
        <div className='flex flex-col gap-10 h-screen justify-center'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-5xl font-bold'>Features and Inclusions</h1>
                <p className='text-2xl'>Here's What You Get</p>
            </div>
            <div className='flex justify-center w-full items-center gap-5 '>
                <Amenity icon={<Savings sx={amenityStyle}/>} text={"Affordable"} subtext={"₱999 for first 2 pax and ₱400 for additional pax "}/>
                <Amenity icon={<Wifi sx={amenityStyle} />} text={"Free Wi-Fi"}/>
                <Amenity icon={<AcUnit sx={amenityStyle}/>} text={"Airconditioned"}/>
                <Amenity icon={<Groups2 sx={amenityStyle}/>} text={"Max of 12 pax"}/>
            </div>
            <div className='flex justify-center w-full items-center gap-5'>
                <Amenity icon={<Tv sx={amenityStyle} />} text={"Flat Screen TV"}/>
                <Amenity icon={<Bathtub sx={amenityStyle}/>} text={"En suite Bathroom"}/>
                <Amenity icon={<DirectionsCar sx={amenityStyle}/>} text={"Free Parking"}/>
                <Amenity icon={<Flatware sx={amenityStyle}/>} text={"Complete set of Kitchenwares & Utensils"}/>
            </div>
            <div className='flex justify-center w-full items-center gap-5'>
                <Amenity icon={<RiceBowl sx={amenityStyle} />} text={"Kettle & Rice Cooker Available"}/>
                <Amenity icon={<OutdoorGrill sx={amenityStyle}/>} text={"Outdoor Kitchen with Grill"}/>
                <Amenity icon={<TableRestaurant sx={amenityStyle}/>} text={"Outdoor Dining Area (Kubo)"}/>
            </div>
        </div>
    )
}

export default Amenities
