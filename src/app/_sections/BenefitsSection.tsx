"use client"
import React from 'react'
import { motion } from 'framer-motion'


function BenefitsSection() {

    const benefits = ["We understand what the market needs.", "We develop a service that solves the problem.", "We turn the idea into a successful product."]

    const variants = {
        hidden: {},
        visible: {
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.259,
                delay: 1,
            }
        },
    }

    const textVariants = {
        hidden: {
            opacity: 0,
            x: -40
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
            }
        },
    }

    return (
        <section className='mt-[100px] '>
            <motion.h2 
                className='px-app-padding text-dark-black text-[30px] md:text-[39px] lg:text-[48px] font-[300] font-news-reader'
                initial="hidden"
                whileInView="visible"
                variants={textVariants}
                viewport={{
                    once: true,
                }}
            >
                Startups done right, <motion.span 
                    className='font-sans font-[400]' 
                    variants={textVariants}
                >
                    done big
                </motion.span>
            </motion.h2>
            <motion.div
                className='flex flex-wrap'
                initial="hidden"
                whileInView="visible"
                variants={variants}
                viewport={{
                    once: true,
                }}
            >
                {benefits.map((benefit, index) => <Benefit key={index} number={`${index + 1}`} text={benefit} />)}
            </motion.div>
        </section>
    )
}

const Benefit = ({number, text} : {number: string, text: String}) => {
    const numberVariants = {
        hidden: {
            rotate: 180,
            opacity: 0,
            scale: 0
        },
        visible: {
            rotate: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
            }
        }
    }

    const textVariants = {
        hidden: {
            opacity: 0,
            x: -40
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
            }
        }
    }

    return(
        <div className='flex flex-col gap-[25px] py-[50px] px-[50px] flex-1 border-primary-red border-[1px] border-solid '>
            <motion.span 
                className='text-[38px] w-[55px] h-[55px] rounded-full text-white bg-primary-red grid place-items-center'
                variants={numberVariants}
            >
                {number}
            </motion.span>
            <motion.p 
                className='text-[28px] text-primary-red leading-[1]'
                variants={textVariants}
            >
                {text}
            </motion.p>
        </div>
    )
}

export default BenefitsSection