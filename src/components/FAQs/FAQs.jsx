import React from 'react'
import FaqCard from './FAQ-Components/FaqCard'
import FaqData from './faq-data.json';

const FAQs = () => {
    return (
        <div className='h-screen flex flex-col justify-center'>
            <h1 className='text-5xl font-bold'>FAQs</h1>
            <p className='text-2xl'>Here are some Frequently Asked Questions</p>
            <div className='flex flex-col gap-5 mt-5'>
                {FaqData.map((data) => {
                    return <FaqCard key={data.id} question={data.question} answer={data.answer}/>
                })}
            </div>
        </div>
    )
}

export default FAQs
