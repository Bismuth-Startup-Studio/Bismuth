"use client"
import React from 'react'
import logo from "@/assets/logos/bismuth-logo.svg"
import Link from 'next/link'
import Image from 'next/image'
import {usePathname} from 'next/navigation'
import { motion, useScroll, useTransform, useVelocity } from 'framer-motion'


function Navbar() {

    const scroll = useScroll()
    const scrollYVelocity = useVelocity(scroll.scrollY)

    const background = useTransform(
        scroll.scrollYProgress,
        (e) => {
            if(e > 0.03) return "#FFFFFFFF"

            return "#FFFFFF00"
        }
    )

    const y = useTransform(
        scrollYVelocity, (e,) => {
            if(e > 0 || (scrollYVelocity.getPrevious()??0) > 0) return "-100%"
            else if(e < 0 || (scrollYVelocity.getPrevious()??0) < 0 ) return "0%"
        }
    )

    const links = [
        {
            link: "/",
            linkName: "Home"
        },
        {
            link: "/companies",
            linkName: "Companies"
        },
        {
            link: "/team",
            linkName: "Team"
        },
        {
            link: "/#footer",
            linkName: "Contacts"
        },
        
    ]

    return (
        <motion.div 
            className='fixed top-0 w-full left-0 px-app-padding flex flex-col items-center md:flex-row gap-5 py-10 justify-between z-10'
            style={{
                y,
                background,
                transition: "background 1s, transform 0.5s"
            }}
        >
            <div className='flex flex-wrap justify-center items-center gap-10'>
                <Link href="/"><Image src={logo.src} width={logo.width} height={logo.height} alt="" /></Link>
                <nav className='flex gap-5'>
                    {links.map((link, index) => <NavLink key={index} {...link} />)}
                </nav>
            </div>
            <Link href="/#project"><button className='px-[15px] py-1 text-[16px] w-fit rounded-3xl bg-primary-red text-white'>Start A Project</button></Link>
        </motion.div>
    )
}

const NavLink = ({link, linkName}:{link:string, linkName: string}) => {
    const pathname = usePathname()

    return(
        <Link href={link}>
            <div>
                {linkName}
                <div 
                    className={`${pathname === link ? "w-full" : "w-0"} h-[2px] bg-primary-red`}
                    style={{
                        transition: "width 1s"
                    }}
                />
            </div>
        </Link>
    )
}
export default Navbar