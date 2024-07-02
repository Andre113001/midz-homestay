import {Fragment} from 'react';
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

import { Button } from '@mui/material';


const Units = () => {
    return (
        <div className='h-screen flex flex-col justify-center'>
            <h1 className='text-5xl font-bold'>Our other Units</h1>
            <p className='text-2xl'>Check our other current units we have</p>
            <section className='flex gap-3 '>
                <UnitCard unitName={"Villa Alfonso"} imgName={alfonsoPic} logo={alfonsoLogo} newStatus={true} 
                linkButtons={
                    <Button onClick={() => alert('Hllo')} sx={{background: 'white'}}><img src={facebookLogo} width={80}/></Button>
                }
                />
                {/* <UnitCard unitName={"Midz Homestay"} imgName={midzPic} logo={midzLogo}/> */}
                <UnitCard unitName={"Miguel's Homestay"} imgName={miguelPic} logo={miguelLogo}/>
                <UnitCard unitName={"Abiza Homestay"} imgName={abizaPic} logo={abizaLogo}/>
            </section>
        </div>
    )
}

export default Units
