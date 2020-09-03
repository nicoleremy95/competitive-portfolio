import React from 'react'
import {Row, Button} from 'antd'
import "./aboutme.css"

export default function Aboutme() {
    return (
        <div className="aboutme-container" id="aboutme">
            <Row className="aboutme-filter">
                
                <br></br>
                <ul>
                    <li><h1 className="text" justify="end" align="start">about me</h1></li>
                    <li>Nicole Remy</li>
                    <li>nremy@usc.edu</li>
                    <li>
                        <a href="https://www.linkedin.com/in/nicole-remy-190202166/">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://github.com/nicoleremy95">Github</a> 
                    </li>
                </ul>            
            <p className="text" justify="end" align="start">Full-stack web developer hoping to utilize a background in Architecture and Interior Design to create a more aesthetically pleasing design and user experience on the web. Worked with project managers to manage client relationships, projects, timelines, budgets, and customer satisfaction during time as an Architecture Associate. Recently graduated from University of Washington with a certificate in Full Stack Development. Previously graduated from the University of Southern California with a Bachelor of Science in GeoDesign. Ability to work with HTML, CSS, responsive design, JavaScript, React, jQuery, Node.js, Third Party APIs, MySQL, Sequelize, MongoDB, and Mongoose. Excellent working with Github for deployment and collaboration and Heroku for deployment. Active problem solver with a passion for user experience and project management. Successfully worked with a team as a project manager on two projects: PLANiT and drinkME and in both instances finished the projects ahead of schedule and had the time and capacity to implement bonus features. I believe I will be an asset to any team to create more efficient, user friendly applications, within timelines and budget.</p>
            </Row>
            <Button className="links"></Button>
            <Button className="links"></Button>
        </div>
    )
}
