import React from 'react'

function BenefitsSection() {

    const benefits = ["We understand what the market needs.", "We develop a service that solves the problem.", "We turn the idea into a successful product."]

    return (
        <section className='mt-[100px] '>
            <h2 className='px-app-padding text-dark-black text-[48px] font-[300] font-news-reader'>Startups done right, <span className='font-sans font-[400]' >done big</span></h2>
            <div className='flex flex-wrap'>
                {benefits.map((benefit, index) => <Benefit key={index} number={index + 1} text={benefit} />)}
            </div>
        </section>
    )
}

const Benefit = ({number, text}) => {
    return(
        <div className='flex flex-col gap-[60px] py-[50px] px-[50px] flex-1 border-primary-red border-[1px] border-solid '>
            <span className='text-[48px] w-[75px] h-[75px] rounded-full text-white bg-primary-red grid place-items-center'>{number}</span>
            <p className='text-[32px] text-primary-red leading-[1.2]'>{text}</p>
        </div>
    )
}

export default BenefitsSection