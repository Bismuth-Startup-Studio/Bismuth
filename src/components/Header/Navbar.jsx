import React from 'react'
import {routes, routeNames} from '../../utils/routes'
import { Link, useLocation } from 'react-router-dom'
import logo from "../../assets/logos/bismuth-logo.svg"
import Button from '../Button'

function Navbar() {

    const location = useLocation()

    return (
        <div className='flex flex-col items-center md:flex-row gap-5 py-10 justify-between'>
            <div className='flex flex-wrap justify-between items-center gap-10'>
                <img src={logo} alt="" />
                <nav className='flex gap-5'>
                    {routeNames.map(route => <Link key={route} to={routes.get(route).path} >
                        <div>
                            {route}
                            <div className={`${location.pathname === routes.get(route).path ? "w-full" : "w-0"} h-[2px] bg-primary-red`}/>
                        </div>
                    </Link>)}
                </nav>
            </div>
            <button className='px-[15px] py-1 text-[16px] w-fit rounded-3xl bg-primary-red text-white'>Start A Project</button>
        </div>
    )
}

export default Navbar