import Header from '../../components/Header/Header'
import Ghana from "../../assets/images/Flags/Ghana_Flag_Colours 1.svg"
import uk from "../../assets/images/Flags/Flag_of_the_United_Kingdom 1 (1).svg"
import france from "../../assets/images/Flags/Flag_of_France 1.svg"
import usa from "../../assets/images/Flags/United_States_Flag_Colours 1.svg"
import canada from "../../assets/images/Flags/Flag_of_Canada 1.svg"
import germany from '../../assets/images/Flags/Germany_Flag_Colours 1.svg'
import Footer from '../../components/BottomSection/Footer'
import linkedin from "../../assets/logos/socials/linkedin.svg"
import twitter from "../../assets/logos/socials/twitter.svg"
import github from "../../assets/logos/socials/github.svg"
import samuel from "../../assets/images/teammates/Samuel.png"
import afia from "../../assets/images/teammates/Afia.png"
import charlie from "../../assets/images/teammates/Charlie.png"
import "./team.css"
import Image, { StaticImageData } from 'next/image'
import Link from "next/link"

function Team() {

    const flags = [Ghana, uk, france, usa, canada, germany]

    const members = [{
        name: "Samuel",
        picture: samuel,
        position: "Technical Team",
        socials: [{
            icon: twitter,
            link: ""
        },{
            icon: linkedin,
            link: ""
        },{
            icon: github,
            link: ""
        }]
    },{
        name: "Afia",
        picture: afia,
        position: "Product and Project Team",
        socials: [{
            icon: twitter,
            link: ""
        },{
            icon: linkedin,
            link: ""
        }]
    },{
        name: "Charlie",
        picture: charlie,
        position: "Advisory Board",
        socials: [{
            icon: twitter,
            link: ""
        },{
            icon: linkedin,
            link: ""
        }]
    },{
        name: "Samuel",
        picture: samuel,
        position: "Technical Team",
        socials: [{
            icon: twitter,
            link: ""
        },{
            icon: linkedin,
            link: ""
        },{
            icon: github,
            link: ""
        }]
    },{
        name: "Afia",
        picture: afia,
        position: "Product and Project Team",
        socials: [{
            icon: twitter,
            link: ""
        },{
            icon: linkedin,
            link: ""
        }]
    },{
        name: "Charlie",
        picture: charlie,
        position: "Advisory Board",
        socials: [{
            icon: twitter,
            link: ""
        },{
            icon: linkedin,
            link: ""
        }]
    },{
        name: "Samuel",
        picture: samuel,
        position: "Technical Team",
        socials: [{
            icon: twitter,
            link: ""
        },{
            icon: linkedin,
            link: ""
        },{
            icon: github,
            link: ""
        }]
    },{
        name: "Afia",
        picture: afia,
        position: "Product and Project Team",
        socials: [{
            icon: twitter,
            link: ""
        },{
            icon: linkedin,
            link: ""
        }]
    },{
        name: "Charlie",
        picture: charlie,
        position: "Advisory Board",
        socials: [{
            icon: twitter,
            link: ""
        },{
            icon: linkedin,
            link: ""
        }]
    },]

    return (
        <>
            <Header title="Meet our talents"/>
            <div className='mt-[50px]'>
                <h2 className='italic text-[24px] text-center font-news-reader font-[300] mb-[30px]'>Our Team Cuts Across</h2>
                <div className='overflow-hidden'>
                    <div className='countries flex w-max gap-[50px]'>
                        {flags.map((flag, index) => <Image className='w-auto h-[80px] md:h-[120px] lg:h-[150px] object-cover' key={index} src={flag.src} width={flag.width} height={flag.height} alt='' />)}
                        {flags.map((flag, index) => <Image className='w-auto h-[80px] md:h-[120px] lg:h-[150px] object-cover' key={index} src={flag.src} width={flag.width} height={flag.height} alt='' />)}
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 place-items-start lg:grid-cols-3 mt-[100px] mb-[200px] gap-10 gap-y-[150px] px-app-padding'>
                {members.map((member, index) => <MemberCard key={index} {...member}/>)}
            </div>
            <Footer/>
        </>

    )
}

const MemberCard= ({
    name,
    picture,
    position,
    socials,
}:{
    name:string,
    picture: StaticImageData,
    position: string,
    socials: {
        icon: any,
        link: string
    }[]
}) => {
    return(
        <div className='m-auto'>
            <Image className='mb-[30px] rounded-md' src={picture.src} width={picture.width} height={picture.height} alt="" />
            <div className='px-[10%]'>
                <span className='mb-[2px] block text-[24px] font-[600]'>{name}</span>
                <span className='mb-[20px] block text-[20px] font-news-reader italic'>{position}</span>
                <div className='flex items-center gap-5'>
                    {socials.map(({icon, link}:{icon:any, link: string}, index:any) => <Link key={index} href={link}>
                        <Image src={icon.src} width={icon.width} height={icon.height} alt="" />
                    </Link>)}
                </div>
            </div>
        </div>
    )
}

export default Team