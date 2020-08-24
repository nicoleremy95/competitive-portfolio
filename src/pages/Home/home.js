import React from 'react'
import Navbar from '../../components/navbar/navbar'
import CarouselImage from '../../components/carousel/carousel'
import ContactForm from '../../components/contactForm/contactform'


export default function Home() {
    return (
        <>
            <Navbar/>
            <CarouselImage/>
            <ContactForm/>
        </>
    )
}
