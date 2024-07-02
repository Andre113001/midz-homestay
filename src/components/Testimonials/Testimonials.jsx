import { Fragment } from 'react'
import TestimonialCard from './Testimonials-Components/TestimonialCard'
import TestimonialData from './Testimonials-data.json';

const Testimonials = () => {
    return (
        <Fragment >
            <h1 className='text-5xl font-bold'>Your Awesome Feedback!</h1>
            <p className='text-2xl'>Ayy thank you so much for all your feedback</p>
            <section className='flex flex-wrap justify-center h-screen'>
                {TestimonialData.map((data) => {
                    return <TestimonialCard key={data.id} personName={data.personName} platform={data.platform} text={data.text}/>
                })}
            </section>
        </Fragment>
    )
}

export default Testimonials
