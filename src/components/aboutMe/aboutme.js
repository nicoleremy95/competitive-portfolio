import React from 'react'
import {Row, Col} from 'antd'
import "./aboutme.css"
import profilePictureImg from "../../images/profilePicture.jpeg"

export default function Aboutme() {
    return (
        <div className="aboutme-container">
            <Row 
                className="about-me" 
            >
                <Col 
                lg= {{span:8}} 
                sm={{span: 24}} 
                xs={{span:24}}
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
                                align="center"> 
                                <strong>nremy@usc.edu</strong>
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
                <div className="buffer"></div>
                <Col 
                    lg= {{span:16, offset:10}} 
                    sm={{span: 24}} 
                    xs={{span:24}}
                    className="aboutme-text"
                >
                    <p 
                        className="text-bio" 
                        align="justify"
                        
                    >
                        <strong>FULL STACK WEB DEVELOPER</strong>  hoping to utilize a background in Architecture to construct aesthetically pleasing front end design and efficient back end logic. Worked with project managers to manage client relationships, projects, timelines, budgets, and customer satisfaction during time as an Architecture Associate. Recently graduated from University of Washington with a certificate in Full Stack Development. Previously graduated from the University of Southern California with a Bachelor of Science in GeoDesign. Excellent working with Github for deployment and collaboration and Heroku for deployment. Active problem solver with a passion for user experience and project management. Successfully worked with a team as a project manager on two projects: <a href="https://travelplanit.herokuapp.com/"><strong>PLANiT </strong></a> and <a href="https://derek-watson14.github.io/drinkME/"><strong>drinkME</strong></a> and in both instances finished the projects ahead of schedule and had the time and capacity to implement bonus features. I believe I will be an asset to any team to create more efficient, user friendly applications, within timelines and budget.
                    </p>
                </Col>
            </Row>
            <div className="buffer"></div>
            
        </div>
    )
}
