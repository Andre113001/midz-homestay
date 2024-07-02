import {Fragment} from 'react';
import heroImg from './hero-img.png';
import { IconButton } from '@mui/material';
import AgodaIcon from '../../assets/icons/agoda.png';
import AirbnbIcon from '../../assets/icons/airbnb.png';
import MidzIcon from '../../assets/icons/midz.jpg';

import videoSrc from '../../assets/videos/midz-video.mp4';


const Hero = () => {
    
    const glassClass = {
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
        backdropFilter: 'blur(4px)', // Blur effect
        borderRadius: '10px', // Adjust border radius
        width: '200px', // Adjust width as needed
        height: '60px', // Adjust height as needed
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff', // Text color within the button
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 1)', // Ensures background color does not change on hover
        },
        '&:active': {
            backgroundColor: 'rgba(255, 255, 255, 1)', // Ensures background color does not change on click
        },
    }

    const linkNewTab = (link) => {
        window.open(link, '_blank');
    }

    return (
    <Fragment>
        {/* Main Hero Section */}
        <section className="relative h-screen">
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src={videoSrc}
                autoPlay
                muted
                loop
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 z-10 flex items-center justify-center flex-col">
                <nav className='absolute top-0 left-0 p-4 flex w-full justify-center'>
                    <img src={MidzIcon} className='rounded-full' width={80} alt="Midz Logo" />
                </nav>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-[#f3f3f3] text-wrap flex-wrap xl:text-[7rem] font-bold text-[5rem] leading-[7rem]">MIDZ HOMESTAY</h1>
                        <h5 className="text-[#539de3] text-4xl font-bold aesthetic-font italic">"Home Away From Home"</h5>
                    </div>
                    <div className="mt-[5rem] gap-3 flex flex-col items-center">
                        <h3 className="text-white text-5xl font-bold">Book Now!</h3>
                        <div className="flex gap-4 md:flex-row sm:flex-col">
                            <IconButton onClick={() => linkNewTab('https://www.airbnb.com/rooms/23108218?source_impression_id=p3_1719893308_P3dJ52l1q7AjXP69')} sx={glassClass}>
                                <img src={AirbnbIcon} alt="Airbnb" style={{ width: '70%' }} />
                            </IconButton>
                            <IconButton onClick={() => linkNewTab('https://www.agoda.com/midz-homestay/hotel/matnog-ph.html?cid=1844104&ds=QYn2zcm962Bw8flP')} sx={glassClass}>
                                <img src={AgodaIcon} alt="Agoda" style={{ width: '70%' }} />
                            </IconButton>
                        </div>
                    </div>
                    <span className='animate-bounce text-white absolute bottom-0 mb-5'>Scroll down for more details</span>
                </div>
            </div>
        </section>

    </Fragment>
    )
}

export default Hero
