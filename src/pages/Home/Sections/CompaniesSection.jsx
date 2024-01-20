import React from 'react'
import Button from '../../../components/Button'
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
        <button className="block text-secondary-red bg-white py-3 px-[20px] rounded-full m-auto mt-[30px] text-[24px] font-[700]">More Companies</button>
      </div>
    </section>
  )
}

const CompanyCard = ({image, title, subtitle, desc}) => {
  return(
    <div className='flex flex-col md:flex-row gap-[30px] w-fit md:w-[677px] min-h-[329px] p-[30px] bg-white'>
      <img className='object-top w-[300px]' src={image} alt="" />
      <div className='flex flex-col gap-[40px]'>
        <div>
          <h2 className='w-[300px] md:w-full text-[24px]'>{title}</h2>
          <h3 className='font-news-reader italic font-[300] text-[16px]'>{subtitle}</h3>
        </div>
        <p className='w-[300px] md:w-full text-[16px] font-[300]'>{desc}</p>
      </div>
    </div>
  )
}


export default CompaniesSection