import React from 'react'
import Navbar from '../../components/navbar/navbar'
import CarouselImage from '../../components/carousel/carousel'
import ContactForm from '../../components/contactForm/contactform'
import Resume from '../../components/resume/resume'


export default function Home() {
    return (
        <>
            <Navbar/>
            <CarouselImage/>
            <Resume/>
            <ContactForm/>
        </>
    )
}
