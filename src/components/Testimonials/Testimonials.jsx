import { Fragment } from 'react'
import TestimonialCard from './Testimonials-Components/TestimonialCard'
import TestimonialData from './Testimonials-data.json';

import { motion } from 'framer-motion';


const Testimonials = () => {
    return (
        <div className="phone:py-36 phone:w-full tablet:w-3/4 flex flex-col justify-center items-center">
            <div className="flex flex-col text-center w-full phone:items-center mb-8">
                <motion.h1 
                    initial={{opacity: 0, y: 0}}
                    whileInView={{opacity: 1, y: -5}}
                    animate='visible'
                    viewport={{
                        amount: 'all',
                        once: true
                    }}
                    className="text-5xl font-bold"
                >
                    Your Awesome Feedback!
                </motion.h1>
                <motion.p 
                    initial={{opacity: 0, y: 0}}
                    whileInView={{opacity: 1, y: -5}}
                    animate='visible'
                    viewport={{
                        amount: 'all',
                    }}
                    className="tablet:text-2xl tablet:w-3/4 phone:w-full phone:text-sm phone:text-center">Thank you so much for sharing your wonderful experiences from your stay with us!</motion.p>
            </div>
            <section className="flex flex-wrap justify-center w-full">
                {TestimonialData.map((data) => (   
                    <TestimonialCard 
                        key={data.id}
                        personName={data.personName} 
                        platform={data.platform} 
                        text={data.text} 
                    />
                ))}
            </section>
        </div>
    );
};

export default Testimonials;
