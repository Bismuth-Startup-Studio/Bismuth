import React from 'react'
import Header from '../../components/Header/Header'
import CompanyCard from '../../components/CompanyCard'
import dofdat from "../../assets/logos/Dofdat.svg"
import nothad from "../../assets/logos/Nothad.svg"
import deliver from "../../assets/logos/delivery.svg"
import bitlabs from "../../assets/logos/bitlabs.svg"
import cocycle from "../../assets/logos/cocycle.svg"
import gurdrent from "../../assets/logos/gurdrent.svg"
import incircled from "../../assets/logos/incircled.svg"
import Form from '../../components/BottomSection/Form'
import Footer from '../../components/BottomSection/Footer'
import "./company.css"

function Company() {
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
    },{
        title: "BitLabs",
        subtitle: "Delivery Security",
        desc: "Lorem ipsum dolor sit amet consectetur. Tellus ligula dictumst convallis id malesuada habitant quis id facilisis. Iaculis blandit fringilla eget nunc sit. Ultrices sed euismod enim tristique sit sed enim vulputate. ",
        image: bitlabs
    },{
        title: "Cocycle",
        subtitle: "Delivery Security",
        desc: "Lorem ipsum dolor sit amet consectetur. Tellus ligula dictumst convallis id malesuada habitant quis id facilisis. Iaculis blandit fringilla eget nunc sit. Ultrices sed euismod enim tristique sit sed enim vulputate. ",
        image: cocycle
    },{
        title: "Guard Rent",
        subtitle: "Delivery Security",
        desc: "Lorem ipsum dolor sit amet consectetur. Tellus ligula dictumst convallis id malesuada habitant quis id facilisis. Iaculis blandit fringilla eget nunc sit. Ultrices sed euismod enim tristique sit sed enim vulputate. ",
        image: gurdrent
    },{
        title: "InCircled",
        subtitle: "Delivery Security",
        desc: "Lorem ipsum dolor sit amet consectetur. Tellus ligula dictumst convallis id malesuada habitant quis id facilisis. Iaculis blandit fringilla eget nunc sit. Ultrices sed euismod enim tristique sit sed enim vulputate. ",
        image: incircled
    }]

    return (
        <>
            <Header title="Our Companies" />
            <div className='bg-light-red py-[100px] px-[5vw]'>
                <h2 className='font-news-reader italic text-[32px] text-center'>We are building and operationally developing high potential
    businesses across various verticals in a large number of
    countries. Explore our portfolio below.</h2>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(587px,1fr))] mt-[100px] px-app-padding mb-[200px] gap-y-10 justify-between">
                {companies.map((company,index )=> <div>
                    <div className='company-card w-fit m-auto bg-white'>
                        <CompanyCard key={index} {...company}/>
                    </div>
                </div>)}
            </div>
            <Form/>
            <Footer/>
        </>
    )
}

export default Company