import React from 'react'
import Navbar from '../../components/navbar/navbar'
// import CarouselImage from '../../components/carousel/carousel'
import ContactForm from '../../components/contactForm/contactform'
import Resume from '../../components/resume/resume'
import Portfolio from '../../components/portfolio/portfolio'
import Aboutme from '../../components/aboutMe/aboutme'


export default function Home() {
    return (
        <>
            <Navbar/>
            <Aboutme/>
            {/* <CarouselImage/> */}
            <Portfolio/>
            <Resume/>
            <ContactForm/>
        </>
    )
}
