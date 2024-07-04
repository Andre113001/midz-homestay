import { Fragment, useState } from 'react'
import AirbnbImg from '../../../assets/icons/airbnb.png';
import AgodaImg from '../../../assets/icons/agoda.png';
import { Rating } from '@mui/material';

import { motion } from 'framer-motion';

const TestimonialCard = ({ personName, platform, text }) => {
    const Icons = {
        Airbnb: {
            icon: AirbnbImg,
            height: "tablet:h-9 phone:h-5"
        },
        Agoda: {
            icon: AgodaImg,
            height: "tablet:h-12 phone:h-9"
        }
    };

    return (
        <motion.section 
            initial={{opacity: 0, y: 0}}
            whileInView={{opacity: 1, y: -5}}
            animate='visible'
            viewport={{
                margin: '-150px',
                once: true
            }}
            className="tablet:w-1/2 phone:w-full tablet:h-[17rem] phone:h-[25rem] p-12 rounded-2xl shadow-xl flex flex-col tablet:justify-between mb-8"
        >
            <div className="flex flex-wrap justify-between items-center mb-5">
                <div className="flex flex-col font-bold">
                    <h5>{personName}</h5>
                    <Rating name="read-only" value={5} readOnly />
                </div>
                {platform === 'Airbnb' ? (
                    <img src={Icons.Airbnb.icon} className={Icons.Airbnb.height} alt="Airbnb" />
                ) : platform === 'Agoda' ? (
                    <img src={Icons.Agoda.icon} className={Icons.Agoda.height} alt="Agoda" />
                ) : null}
            </div>
            <div className="flex-grow overflow-hidden">
                <p className="italic">"{text}"</p>
            </div>
        </motion.section>
    );
};

export default TestimonialCard
