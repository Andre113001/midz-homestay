import { Fragment, useState } from 'react'
import AirbnbImg from '../../../assets/icons/airbnb.png';
import AgodaImg from '../../../assets/icons/agoda.png';
import { Rating } from '@mui/material';

const TestimonialCard = ({personName, platform, text}) => {

    const Icons = {
        Airbnb: {
            icon: AirbnbImg,
            height: "h-9"
        },
        Agoda: {
            icon: AgodaImg,
            height: "h-12"
        }
    }

    return (
    <Fragment>
        <section className="w-1/2 h-[17rem] p-12 rounded-2xl shadow-xl overflow-hidden flex flex-col justify-between">
            <div className="flex flex-wrap justify-between  items-center mb-5">
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
            <p className="overflow-y-auto italic">"{text}"</p>
            </div>
        </section>
    </Fragment>
)
}

export default TestimonialCard
