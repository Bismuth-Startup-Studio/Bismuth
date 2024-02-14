import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import headerBg from "../../assets/images/Noise & Texture.svg"

function Header({children, title} : {children?: ReactNode, title?: String }) {
  return (
    <header
      className='relative px-app-padding pt-[70px]' 
      style={{
        background: `conic-gradient(from 90deg at 50% 100%, rgba(185, 16, 11, 0.29) 0.035999999090563506deg, rgba(185, 16, 11, 0.15) 180.4321575164795deg, rgba(185, 16, 11, 0.00) 271.4998698234558deg, rgba(185, 16, 11, 0.30) 360deg), var(--color-gray-50, #FEFEFE)`,
      }}
    >
      <div 
        className='absolute inset-0 w-full h-full'
        style={{
          background: `url("${headerBg.src}"), lightgray 0% 0% / 88.0859375px 88.0859375px repeat`,
          backgroundAttachment: "fixed",
          mixBlendMode: "overlay"
        }}
      />
      <div className='relative'>
      <Navbar/>
      {title ? 
        <h1 className='italic font-news-reader font-[300] text-center text-light-black text-[40px] md:text-[50px] lg:text-[64px] pb-[50px] lg:pb-[100px] pt-[30px]'>{title}</h1>
        :
        children
      }
      </div>
    </header>
  )
}

export default Header