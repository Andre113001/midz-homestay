import { Fragment } from 'react'
import TestimonialCard from './Testimonials-Components/TestimonialCard'
import TestimonialData from './Testimonials-data.json';

const Testimonials = () => {
    return (
        <div className="phone:py-36 phone:w-full tablet:w-3/4 flex flex-col justify-center items-center">
            <div className="flex flex-col phone:w-1/2 text-center w-full phone:items-center mb-8">
                <h1 className="text-5xl font-bold">Your Awesome Feedback!</h1>
                <p className="text-2xl phone:text-xl phone:text-center">Ayy thank you so much for all your feedback</p>
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
