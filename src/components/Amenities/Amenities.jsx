import React from 'react';
import Amenity from './Amenities-Components/Amenity';
import { motion } from 'framer-motion';
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
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                when: "beforeChildren",
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className='flex  flex-col items-center justify-center min-h-screen py-10'>
            <div className='flex flex-col items-center text-center mb-10'>
                <motion.h1 
                    initial={{opacity: 0, y: 0}}
                    whileInView={{opacity: 1, y: -5}}
                    animate='visible'
                    viewport={{
                        amount: 'all',
                        once: true
                    }}
                    className='text-5xl font-bold'
                >
                    Features & Inclusions
                </motion.h1>
                <motion.p
                    className='text-2xl'
                    initial={{opacity: 0, y: 0}}
                    whileInView={{opacity: 1, y: -5}}
                    animate='visible'
                    viewport={{
                        amount: 'all',
                        once: true
                    }}
                >
                    Here's What You Get
                </motion.p>
            </div>
           <center>
                <motion.div 
                    className='grid w-full max-w-screen-lg grid-cols-3 md:grid-cols-4 gap-4'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    >
                    <motion.div variants={itemVariants}>
                        <Amenity icon={<Savings sx={amenityStyle}/>} text={"Affordable"} subtext={"₱999 for first 2 pax and ₱400 for additional pax "}/>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <Amenity icon={<Directions sx={amenityStyle} />} text={"8 KM From Matnog Port"}/>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <Amenity icon={<Wifi sx={amenityStyle} />} text={"Free WiFi"}/>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <Amenity icon={<AcUnit sx={amenityStyle}/>} text={"Airconditioned"}/>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <Amenity icon={<Groups2 sx={amenityStyle}/>} text={"Maximum of 12 pax"}/>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <Amenity icon={<Tv sx={amenityStyle} />} text={"Flat Screen TV"}/>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <Amenity icon={<Bathtub sx={amenityStyle}/>} text={"En suite Bathroom"}/>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <Amenity icon={<DirectionsCar sx={amenityStyle}/>} text={"Free Parking"}/>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <Amenity icon={<Flatware sx={amenityStyle}/>} text={"Complete set of Kitchenwares & Utensils"}/>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <Amenity icon={<RiceBowl sx={amenityStyle} />} text={"Kettle & Rice Cooker Available"}/>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <Amenity icon={<OutdoorGrill sx={amenityStyle}/>} text={"Outdoor Kitchen with Grill"}/>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <Amenity icon={<TableRestaurant sx={amenityStyle}/>} text={"Outdoor Dining Area (Kubo)"}/>
                    </motion.div>
                </motion.div>
            </center> 
        </div>
    );
};

export default Amenities;
