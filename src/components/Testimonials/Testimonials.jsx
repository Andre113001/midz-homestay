import { Fragment } from 'react'
import TestimonialCard from './Testimonials-Components/TestimonialCard'
import TestimonialData from './Testimonials-data.json';

const Testimonials = () => {
    return (
        <div className="phone:py-36 phone:w-full tablet:w-3/4 flex flex-col justify-center items-center">
            <div className="flex flex-col text-center w-full phone:items-center mb-8">
                <h1 className="text-5xl font-bold">Your Awesome Feedback!</h1>
                <p className="tablet:text-2xl tablet:w-3/4 phone:w-full phone:text-sm phone:text-center">Thank you so much for sharing your wonderful experiences from your stay with us!</p>
            </div>
            <section className="flex flex-wrap justify-center w-full">
                {TestimonialData.map((data) => (
                    <TestimonialCard key={data.id} personName={data.personName} platform={data.platform} text={data.text} />
                ))}
            </section>
        </div>
    );
};

export default Testimonials;
