import React from 'react'
import ContactCard from './Contact-Components/ContactCard'
import mapImg from './map.png'
import { Call, Facebook, AlternateEmail, Face } from '@mui/icons-material'

const Contact = () => {
  return (
    <div className=''>
        <div className='flex justify-center bg-slate-100'>
            <div className='p-10'>
                <h1 className='text-5xl font-bold'>Contact Us</h1>
                <p className='text-2xl'>You may contact us below</p>
                <section className='w-full flex flex-col gap-2'>
                    <ContactCard icon={<Call sx={{fontSize: 40}}/>} content={"+63 923 233 853 0123"} />
                    <ContactCard icon={<Facebook sx={{fontSize: 40}} />} content={"@midzhomestay"} />
                    <ContactCard icon={<AlternateEmail sx={{fontSize: 40}}/>} content={"midzhomestay@email.com"} />
                </section>
            </div>
            <div className='w-full h-full'>
                <div className='relative pt-[56.25%]'> {/* 16:9 Aspect Ratio */}
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d973.3109231924269!2d124.03396496960292!3d12.632011799228334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0cfe59aedb53d%3A0xa3f2db7cc5219dbf!2sMidz%20Homestay!5e0!3m2!1sen!2sph!4v1719833267996!5m2!1sen!2sph" 
                        className='absolute top-0 left-0 w-full h-[100%] rounded-xl' 
                        allowFullScreen="" 
                        loading="lazy">
                    </iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
