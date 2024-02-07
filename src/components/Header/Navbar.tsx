"use client"
import React from 'react'
import logo from "@/assets/logos/bismuth-logo.svg"
import Link from 'next/link'
import Image from 'next/image'
import {usePathname} from 'next/navigation'


function Navbar() {
    
    const pathname = usePathname()

    return (
        <div className=' flex flex-col items-center md:flex-row gap-5 py-10 justify-between'>
            <div className='flex flex-wrap justify-center items-center gap-10'>
                <Link href="/"><Image src={logo.src} width={logo.width} height={logo.height} alt="" /></Link>
                <nav className='flex gap-5'>
                    <Link href="/">
                        <div>
                            Home
                            <div className={`${pathname === "/" ? "w-full" : "w-0"} h-[2px] bg-primary-red`}/>
                        </div>
                    </Link>
                    <Link href="/companies">
                        <div>
                            Companies
                            <div className={`${pathname === "/companies" ? "w-full" : "w-0"} h-[2px] bg-primary-red`}/>
                        </div>
                    </Link>
                    <Link href="/team">
                        <div>
                            Team
                            <div className={`${pathname === "/team" ? "w-full" : "w-0"} h-[2px] bg-primary-red`}/>
                        </div>
                    </Link>
                    <Link href="/#footer">
                        <div>
                            Contacts
                            <div className={`w-0 h-[2px] bg-primary-red`}/>
                        </div>
                    </Link>
                </nav>
            </div>
            <Link href="/#project"><button className='px-[15px] py-1 text-[16px] w-fit rounded-3xl bg-primary-red text-white'>Start A Project</button></Link>
        </div>
    )
}

export default Navbar