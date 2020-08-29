import React from 'react'
import Navbar from '../../components/navbar/navbar'
import ContactForm from '../../components/contactForm/contactform'
import Resume from '../../components/resume/resume'
import Portfolio from '../../components/portfolio/portfolio'
import Aboutme from '../../components/aboutMe/aboutme'


export default function Home() {
    return (
        <>
            <Navbar/>
            <Aboutme/>
            <Portfolio/>
            <Resume/>
            <ContactForm/>
        </>
    )
}
