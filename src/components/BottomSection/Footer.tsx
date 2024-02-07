import bismuthGrey from "../../assets/logos/bismuth-logo-grey.svg"
import insta from "../../assets/logos/socials/instagram.svg"
import twitter from '../../assets/logos/socials/twitter.svg'
import facbook from "../../assets/logos/socials/facebook.svg"
import youtube from "../../assets/logos/socials/youtube.svg"
import Link from "next/link"
import Image from "next/image"

function Footer() {

  return (
    <div id="footer" className=' flex flex-col gap-10 md:flex-row justify-between py-[50px] text-[16px] text-[#7C7C7C] px-app-padding'>
      <div className='flex flex-col text-[16px] font-[300]'>
        <Image className='mb-[32px]' width={bismuthGrey.width} height={bismuthGrey.height} src={bismuthGrey.src} alt="" />
        <p className='mb-[50px]'>
        info@bismuth.com<br/>
bismuth@gmail.com<br/>
+233 54 165 3162 | +1 540 617 2840
        </p>
        <span>© 2023 Bismuth Inc. All Rights Reserved.</span>
      </div>
      <div className='flex flex-col md:items-end justify-between'>
        <div className="flex flex-wrap gap-x-[30px] gap-y-[10px]">
          <Link className='font-[600]' href="/">About</Link>
          <Link className='font-[600]' href="/companies">Companies</Link>
          <Link className='font-[600]' href="/team">Team</Link>
          <Link className='font-[600]' href="/contacts">Get In touch</Link>
          <Link className='font-[600]' href="/">Join the Journey</Link>
          <Link className='font-[600]' href="/">About</Link>
        </div>
        <div className='my-10'>
          <p className='font-[600]'>You can find us around the world</p>
          <p>Columbus, Ohio | Santasi - Kumasi | Accra</p>
        </div>
        <div className='flex items-center gap-[25px]'>
          <Link href="/">
            <Image src={insta.src} width={insta.width} height={insta.height} alt="" />
          </Link>
          <Link href="/">
            <Image src={twitter.src} width={twitter.width} height={twitter.height} alt="" />
          </Link>
          <Link href="/">
            <Image src={facbook.src} width={facbook.width} height={facbook.height} alt="" />
          </Link>
          <Link href="/">
            <Image src={youtube.src} width={youtube.width} height={youtube.height} alt="" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer