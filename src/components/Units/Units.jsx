import {Fragment, useState} from 'react';
import UnitCard from './Units-Components/UnitCard';
import midzPic from './Units-Components/Units-images/midz.jpg';
import abizaPic from './Units-Components/Units-images/abiza-1.jpg';
import miguelPic from './Units-Components/Units-images/miguel.jpg';
import alfonsoPic from './Units-Components/Units-images/alfonso.jpg';

import midzLogo from '../../assets/icons/midz.jpg';
import alfonsoLogo from '../../assets/icons/alfonso.jpg';
import miguelLogo from '../../assets/icons/miguel.png';
import abizaLogo from '../../assets/icons/abiza.png';
import facebookLogo from '../../assets/icons/facebook.png'
import airbnbLogo from '../../assets/icons/airbnb.png'
import agodaLogo from '../../assets/icons/agoda.png'
import bookingLogo from '../../assets/icons/booking.png'

import { Button } from '@mui/material';
import { Height } from '@mui/icons-material';


const Units = () => {
    
    const buttonStyle = {
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
        backdropFilter: 'blur(4px)', // Blur effect
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 1)', // Ensures background color does not change on hover
        },
        '&:active': {
            backgroundColor: 'rgba(255, 255, 255, 1)', // Ensures background color does not change on click
        },
        height: 50
    }

    const linkNewTab = (link) => {
        window.open(link, '_blank');
        // alert(link)
    }

    return (
        <div className='h-screen flex flex-col justify-center'>
            <h1 className='text-5xl font-bold'>Our other Units</h1>
            <p className='text-2xl'>Check our other current units we have</p>
            <section className='flex gap-3 '>
                <UnitCard unitName={"Villa Alfonso by Midz Homestay"} imgName={alfonsoPic} logo={alfonsoLogo} newStatus={true} 
                linkButtons={
                    <div className='flex flex-col gap-2'>
                        <Button onClick={() => linkNewTab('https://www.airbnb.com/rooms/1190188936097354778?check_in=2024-07-06&check_out=2024-07-11&guests=1&adults=1&s=67&unique_share_id=780b0e81-6ca1-46f2-ab81-7ed4c1a71f45')} sx={buttonStyle}><img src={airbnbLogo} width={80}/></Button>
                        <Button onClick={() => linkNewTab('https://www.agoda.com/villa-alfonso-by-midz-homestay-room-1/hotel/matnog-ph.html?finalPriceView=1&isShowMobileAppPrice=false&cid=1922891&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2024-07-11&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=PHP&isFreeOccSearch=false&tag=170bc45e-3744-4466-ae77-37eaa90a604a&los=1&searchrequestid=08a40321-81c6-46ec-8620-cd9ef9569dfe&ds=L1BZbdqM4nr%2FFoYc')} sx={buttonStyle}><img src={agodaLogo} width={80}/></Button>
                        <Button onClick={() => linkNewTab('https://web.facebook.com/profile.php?id=61560851799344&sk')} sx={buttonStyle}><img src={facebookLogo} width={80}/></Button>
                    </div>
                }
                />
                {/* <UnitCard unitName={"Midz Homestay"} imgName={midzPic} logo={midzLogo}/> */}
                <UnitCard unitName={"Miguel's Homestay"} imgName={miguelPic} logo={miguelLogo} 
                linkButtons={
                    <div className='flex flex-col gap-2'>
                        <Button onClick={() => linkNewTab('https://www.airbnb.com/rooms/763606029840268017?source_impression_id=p3_1719899416_P3naybOJ5h9M_FC6')} sx={buttonStyle}><img src={airbnbLogo} width={80}/></Button>
                        <Button onClick={() => linkNewTab('https://www.booking.com/hotel/ph/miguels-homestay.en-gb.html')} sx={buttonStyle}><img src={bookingLogo} width={80}/></Button>
                    </div>
                }
                />
                <UnitCard unitName={"Abiza Homestay"} imgName={abizaPic} logo={abizaLogo}
                    linkButtons={
                        <div className='flex flex-col gap-2'>
                            <Button onClick={() => linkNewTab('https://www.airbnb.com/rooms/722064950773483365?source_impression_id=p3_1719900979_P38jHxBItQJ5f4cy')} sx={buttonStyle}><img src={airbnbLogo} width={80}/></Button>
                            <Button onClick={() => linkNewTab('https://www.agoda.com/abiza-homestay/hotel/matnog-ph.html?cid=1844104&ds=XTvaRY3Zn%2FQGbWJn')} sx={buttonStyle}><img src={agodaLogo} width={80}/></Button>
                            <Button onClick={() => linkNewTab('https://www.booking.com/hotel/ph/abiza-homestay.en-gb.html?aid=356980&label=gog235jc-1DCAsotAFCDmFiaXphLWhvbWVzdGF5SDNYA2i0AYgBAZgBCbgBF8gBFdgBA-gBAYgCAagCA7gC2aqOtAbAAgHSAiRjMWM2MmRjMy0zNDhjLTQ5ZWYtOGU4Zi04NjkxNjIzNDVmZDXYAgTgAgE&sid=baea4b30f973ae7e238e944c3c30205d&dist=0&keep_landing=1&sb_price_type=total&type=total&')} sx={buttonStyle}><img src={bookingLogo} width={80}/></Button>
                        </div>
                    }
                />
            </section>
        </div>
    )
}

export default Units
