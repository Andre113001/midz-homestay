import React from 'react';
import Amenity from './Amenities-Components/Amenity';
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
    TableRestaurant,
    Directions
} from '@mui/icons-material';

const Amenities = () => {

    const amenityStyle = {
        fontSize: '3rem', 
        color: '#539de3'
    }

    return (
        <div className='flex flex-col gap-10 tablet:w-3/4 min-h-screen justify-center items-center py-10'>
            <div className='flex flex-col text-center justify-center items-center'>
                <h1 className='text-5xl font-bold'>Features & Inclusions</h1>
                <p className='text-2xl'>Here's What You Get</p>
            </div>
            <div className='grid phone:grid-cols-3 tablet:grid-cols-4 place-items-center gap-4'>
                <Amenity icon={<Savings sx={amenityStyle}/>} text={"Affordable"} subtext={"₱999 for first 2 pax and ₱400 for additional pax "}/>
                <Amenity icon={<Directions sx={amenityStyle} />} text={"8 KM From Matnog Port"}/>
                <Amenity icon={<Wifi sx={amenityStyle} />} text={"Free WiFi"}/>
                <Amenity icon={<AcUnit sx={amenityStyle}/>} text={"Airconditioned"}/>
                <Amenity icon={<Groups2 sx={amenityStyle}/>} text={"Maximum of 12 pax"}/>
                <Amenity icon={<Tv sx={amenityStyle} />} text={"Flat Screen TV"}/>
                <Amenity icon={<Bathtub sx={amenityStyle}/>} text={"En suite Bathroom"}/>
                <Amenity icon={<DirectionsCar sx={amenityStyle}/>} text={"Free Parking"}/>
                <Amenity icon={<Flatware sx={amenityStyle}/>} text={"Complete set of Kitchenwares & Utensils"}/>
                <Amenity icon={<RiceBowl sx={amenityStyle} />} text={"Kettle & Rice Cooker Available"}/>
                <Amenity icon={<OutdoorGrill sx={amenityStyle}/>} text={"Outdoor Kitchen with Grill"}/>
                <Amenity icon={<TableRestaurant sx={amenityStyle}/>} text={"Outdoor Dining Area (Kubo)"}/>
            </div>
        </div>
    )
}

export default Amenities;
