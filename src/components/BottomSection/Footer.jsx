import React, {useEffect, useRef} from 'react'
import { Link, useLocation } from 'react-router-dom'
import bismuthGrey from "../../assets/logos/bismuth-logo-grey.svg"
import { routes, routeNames } from '../../utils/routes'
import insta from "../../assets/logos/socials/instagram.svg"
import twitter from '../../assets/logos/socials/twitter.svg'
import facbook from "../../assets/logos/socials/facebook.svg"
import youtube from "../../assets/logos/socials/youtube.svg"

function Footer() {
  const footerRef = useRef()

  const {hash, key} = useLocation()

  useEffect(() => {
    if(hash === "#footer") footerRef.current.scrollIntoView({ behavior: 'smooth' })
  },[key])

  return (
    <div ref={footerRef} className='flex flex-col gap-10 md:flex-row justify-between py-[50px] text-[16px] text-[#7C7C7C] px-app-padding'>
      <div className='flex flex-col text-[16px] font-[300]'>
        <img className='mb-[32px]' src={bismuthGrey} alt="" />
        <p className='mb-[50px]'>
        info@bismuth.com<br/>
bismuth@gmail.com<br/>
+233 54 165 3162 | +1 540 617 2840
        </p>
        <span>© 2023 Bismuth Inc. All Rights Reserved.</span>
      </div>
      <div className='flex flex-col md:items-end justify-between'>
        <div className="flex flex-wrap gap-x-[30px] gap-y-[10px]">
          <Link className='font-[600]' to={routes.get("Home").path}>About</Link>
          <Link className='font-[600]' to={routes.get("Companies").path}>Companies</Link>
          <Link className='font-[600]' to={routes.get("Team").path}>Team</Link>
          <Link className='font-[600]' to={routes.get("Contact").path}>Get In touch</Link>
          <Link className='font-[600]' to={routes.get("Home").path}>Join the Journey</Link>
          <Link className='font-[600]' to={routes.get("Home").path}>About</Link>
        </div>
        <div className='my-10'>
          <p className='font-[600]'>You can find us around the world</p>
          <p>Columbus, Ohio | Santasi - Kumasi | Accra</p>
        </div>
        <div className='flex items-center gap-[25px]'>
          <Link>
            <img src={insta} alt="" />
          </Link>
          <Link>
            <img src={twitter} alt="" />
          </Link><Link>
            <img src={facbook} alt="" />
          </Link><Link>
            <img src={youtube} alt="" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer