import React from 'react'
import ContactCard from './Contact-Components/ContactCard'
import mapImg from './map.png'
import { Call, Facebook, AlternateEmail, Face } from '@mui/icons-material'

import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className='h-screen w-1/2 flex flex-row justify-center'>
        <div className='flex w-full h-full justify-center items-center'>
            <motion.div 
            initial={{opacity: 0, y: 0}}
            whileInView={{opacity: 1, y: -5}}
            animate='visible'
            viewport={{
                amount: 'all',
                once: true
            }}
            className='flex tablet:gap-20 justify-center phone:flex-col tablet:flex-row rounded-xl bg-slate-100 '>
                <div className='p-10'> 
                    <h1 className='text-4xl font-bold'>Contact Us</h1>
                    <p className='text-xl'>Find us and get in touch.</p>
                    <section className='w-full flex flex-col h-1/2 justify-center'>
                        <ContactCard icon={<Call sx={{fontSize: 40}}/>} content={"09164228893"} />
                        <a href="https://web.facebook.com/MidzHomestay"><ContactCard icon={<Facebook sx={{fontSize: 40}} />} content={"@MidzHomestay"} /></a>
                        {/* <ContactCard icon={<AlternateEmail sx={{fontSize: 40}}/>} content={"midzhomestay@email.com"} /> */}
                    </section>
                </div>
                <div className='w-full phone:h-full tablet:h-1/2'>
                    <div className=''> {/* 16:9 Aspect Ratio */}
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d973.3109231924269!2d124.03396496960292!3d12.632011799228334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0cfe59aedb53d%3A0xa3f2db7cc5219dbf!2sMidz%20Homestay!5e0!3m2!1sen!2sph!4v1719833267996!5m2!1sen!2sph" 
                            className='tablet:w-[50rem] phone:w-full tablet:h-[30.5rem] rounded-xl' 
                            allowFullScreen="" 
                            loading="lazy">
                        </iframe>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Contact
