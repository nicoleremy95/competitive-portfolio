import React from 'react'
import {Row, Col} from 'antd'
import "./aboutme.css"
import profilePictureImg from "../../images/profilePicture.jpeg"

export default function Aboutme() {
    return (
        <div >
            <Row>
                <Col 
                span={8} 
                className="aboutme-picture"
                >
                    <ul >
                        <li>
                            <img 
                                id="profile-picture" 
                                src= {profilePictureImg} 
                                alt="nicole"
                            /> 
                        </li>
                        <li>
                            <h2 
                                
                                className="text" 
                                align="center"> 
                                nremy@usc.edu
                            </h2>
                        </li>
                        <li align="center">                
                            <a className="contact-icon" href="https://www.linkedin.com/in/nicole-remy-190202166/">
                                <i className="fab fa-linkedin-in"></i>  
                            </a>
                            <a className="contact-icon" href="https://github.com/nicoleremy95">
                                <i class="fab fa-github"></i>
                            </a> 
                            <a className="contact-icon" href="https://www.instagram.com/nicole_remy/">
                                <i class="fab fa-instagram"></i>                        
                            </a> 
                        </li> 
                    </ul>  
                </Col>
                <Col 
                span={14} 
                offset={10} 
                className="aboutme-text">
                <p className="text" 
                align="justify"
                >Full-stack web developer hoping to utilize a background in Architecture and Interior Design to create a more aesthetically pleasing design and user experience on the web. Worked with project managers to manage client relationships, projects, timelines, budgets, and customer satisfaction during time as an Architecture Associate. Recently graduated from University of Washington with a certificate in Full Stack Development. Previously graduated from the University of Southern California with a Bachelor of Science in GeoDesign. Excellent working with Github for deployment and collaboration and Heroku for deployment. Active problem solver with a passion for user experience and project management. Successfully worked with a team as a project manager on two projects: PLANiT and drinkME and in both instances finished the projects ahead of schedule and had the time and capacity to implement bonus features. I believe I will be an asset to any team to create more efficient, user friendly applications, within timelines and budget.</p>
            </Col>
            </Row>
            
        </div>
    )
}
