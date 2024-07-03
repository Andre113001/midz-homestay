import { Fragment, useState } from 'react'
import AirbnbImg from '../../../assets/icons/airbnb.png';
import AgodaImg from '../../../assets/icons/agoda.png';
import { Rating } from '@mui/material';

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
        <section className="tablet:w-1/2 phone:w-full tablet:h-[17rem] phone:h-[22rem] p-12 rounded-2xl shadow-xl flex flex-col tablet:justify-between mb-8">
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
        </section>
    );
};

export default TestimonialCard
