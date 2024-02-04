import React from 'react'
import {Link} from "react-router-dom"
import { routes } from '../../../utils/routes'
import CompanyCard from '../../../components/CompanyCard'
import dofdat from "../../../assets/logos/Dofdat.svg"
import nothad from "../../../assets/logos/Nothad.svg"
import deliver from "../../../assets/logos/delivery.svg"


function CompaniesSection() {

  const companies = [{
    title: "Dofdat",
    subtitle: "Manufacturing Security",
    desc: "Lorem ipsum dolor sit amet consectetur. Tellus ligula dictumst convallis id malesuada habitant quis id facilisis. Iaculis blandit fringilla eget nunc sit. Ultrices sed euismod enim tristique sit sed enim vulputate. ",
    image: dofdat
  },{
    title: "Nothad",
    subtitle: "Manufacturing Security",
    desc: "Lorem ipsum dolor sit amet consectetur. Tellus ligula dictumst convallis id malesuada habitant quis id facilisis. Iaculis blandit fringilla eget nunc sit. Ultrices sed euismod enim tristique sit sed enim vulputate. ",
    image: nothad
  },{
    title: "Dofdat",
    subtitle: "Delivery Security",
    desc: "Lorem ipsum dolor sit amet consectetur. Tellus ligula dictumst convallis id malesuada habitant quis id facilisis. Iaculis blandit fringilla eget nunc sit. Ultrices sed euismod enim tristique sit sed enim vulputate. ",
    image: deliver
  }]

  return (
    <section className='px-app-padding mt-[150px]'>
      <div className="relative rounded-[50px] bg-secondary-red p-[50px]">
        <div className='absolute left-[50%] -translate-x-[50%] w-[7vw] h-[7vw] -z-[1] rotate-[45deg] bg-secondary-red top-0 -translate-y-[50%]' />
        <div className='absolute left-[50%] -translate-x-[50%] w-[7vw] h-[7vw] -z-[1] rotate-[45deg] bg-secondary-red bottom-0 translate-y-[50%]' />
        <span className='font-news-reader text-[#FEFEFE] font-[300] text-[24px] italic'>So far, we've successfully started a couple of companies, with more on the horizon.</span>
        <div className="overflow-scroll mt-[50px]">
          <div className="flex gap-[40px] w-fit">
            {companies.map((company, index) => <CompanyCard key={index} {...company}  />)}
          </div>
        </div>
        {/* <Button>More Companies</Button> */}
        <Link to={routes.get("Companies").path}><button className="block text-secondary-red bg-white py-3 px-[20px] rounded-full m-auto mt-[30px] text-[24px] font-[700]">More Companies</button></Link>
      </div>
    </section>
  )
}

export default CompaniesSection