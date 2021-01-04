import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Resume from '../../components/resume/resume'
import Portfolio from '../../components/portfolio/portfolio'
import Aboutme from '../../components/aboutMe/aboutme'
import Skills from '../../components/skills/skills'


export default function Home() {
    return (
        <>
        
            <Navbar/>
            <Aboutme/>
            <Skills/>
            <Portfolio/>
            <Resume/>
        </>
    )
}
