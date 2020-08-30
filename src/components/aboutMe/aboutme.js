import React from 'react'
import {Row, Button} from 'antd'
import "./aboutme.css"

export default function Aboutme() {
    return (
        <div className="aboutme-container" id="aboutme">
            <Row className="aboutme-filter">
            <p className="text" justify="end" align="start">Full-stack web developer hoping to utilize a background in Architecture and Interior Design to create a more aesthetically pleasing design and user experience on the web. Worked with project managers to manage client relationships, projects, timelines, budgets, and customer satisfaction during time as an Architecture Associate. Recently graduated from University of Washington with a certificate in Full Stack Development. Previously graduated from the University of Southern California with a Bachelor of Science in GeoDesign. Comfortable working with React, HTML, CSS, responsive design, JavaScript, Node.js MySQL, Sequelize, MongoDb, and Mongoose. Excellent working with Github for deployment and collaboration, and Restful API integration. Active problem solver with a passion for user experience and project management. Successfully worked with a team as a project manager on two projects: PLANiT and drinkME. I believe I will be an asset to any team to create more efficient, user friendly applications, within timelines and budget.</p>
            </Row>
            <Button className="links"><a href="https://www.linkedin.com/in/nicole-remy-190202166/">LinkedIn</a> </Button>
            <Button className="links"><a href="https://github.com/nicoleremy95">Github</a></Button>
        </div>
    )
}
