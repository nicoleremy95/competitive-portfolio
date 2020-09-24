import React from 'react'
import {Row, Button, Col} from 'antd'
import {Icon,InlineIcon} from '@iconify/react';
import materializecssIcon from '@iconify/icons-logos/materializecss';
import mongodbIcon from '@iconify/icons-logos/mongodb';
import mysqlIcon from '@iconify/icons-cib/mysql';
import antDesign from '@iconify/icons-logos/ant-design';
import npmIcon from '@iconify/icons-cib/npm';
import html5 from '@iconify/icons-logos/html-5';
import reactIcon from '@iconify/icons-logos/react';
import bootstrapIcon from '@iconify/icons-logos/bootstrap';
import logoNodejs from '@iconify/icons-fa-brands/node-js';
import bxlJquery from '@iconify/icons-bx/bxl-jquery';
import javascriptIcon from '@iconify/icons-logos/javascript';
import api1 from '@iconify/icons-carbon/api-1';
import folderTypeCli from '@iconify/icons-vscode-icons/folder-type-cli';
import githubFilled from '@iconify/icons-ant-design/github-filled';
import "./aboutme.css"
import profilePictureImg from "../../images/profilePicture.jpeg"

export default function Aboutme() {
    return (
        <div  className="aboutme">
            <Row >
                <Col span={12} offset={12} className="aboutme-section" >
                    <Row>
                    <p className="text"  align="justify">Full-stack web developer hoping to utilize a background in Architecture and Interior Design to create a more aesthetically pleasing design and user experience on the web. Worked with project managers to manage client relationships, projects, timelines, budgets, and customer satisfaction during time as an Architecture Associate. Recently graduated from University of Washington with a certificate in Full Stack Development. Previously graduated from the University of Southern California with a Bachelor of Science in GeoDesign. Excellent working with Github for deployment and collaboration and Heroku for deployment. Active problem solver with a passion for user experience and project management. Successfully worked with a team as a project manager on two projects: PLANiT and drinkME and in both instances finished the projects ahead of schedule and had the time and capacity to implement bonus features. I believe I will be an asset to any team to create more efficient, user friendly applications, within timelines and budget.</p>
                    </Row>

                   
                    
                </Col>
                <Col span={12}  className="aboutme-container">
                <br></br>
                <ul >
                    <li>
                        <img 
                            id="profile-picture" 
                            src= {profilePictureImg} 
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
            </Row>
            <Row>
                <Col 
                    className="skills" 
                    span={24}
                    align="center"
                >
                            <Icon className= "skill-icon" icon={reactIcon} height="50"/>
                            <Icon className= "skill-icon" icon={antDesign}  height="50"/>
                            <Icon className= "skill-icon" icon={mongodbIcon}  height="50"/>
                            <Icon className= "skill-icon" icon={logoNodejs} height="50" />          
                            <Icon className= "skill-icon" icon={npmIcon}  height="50"/>
                            <Icon className= "skill-icon" icon={materializecssIcon}  height="50" />
                            <Icon className= "skill-icon" icon={mysqlIcon}  height="50"/>
                            <Icon className= "skill-icon" icon={html5} height="50" />         
                            <Icon className= "skill-icon" icon={api1} height="50" />
                            <Icon className= "skill-icon" icon={bxlJquery} height="50"/>
                            <Icon className= "skill-icon" icon={javascriptIcon} height="50"/>  
                            <Icon className= "skill-icon" icon={bootstrapIcon} height="50"/>
                            <Icon className= "skill-icon" icon={folderTypeCli} height="50"/> 
                            <Icon className= "skill-icon" icon={githubFilled} height="50"/>        
                </Col>
            </Row>
        </div>
    )
}
