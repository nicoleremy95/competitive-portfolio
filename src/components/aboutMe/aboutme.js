import React from 'react'
import {Row} from 'antd'
import "./aboutme.css"

export default function Aboutme() {
    return (
        <div className="aboutme-container" id="aboutme">
            <Row justify="center" align="middle" className="aboutme-filter">
            <p className="text">Full-stack web developer hoping to utilize a background in Architecture and Interior Design to create a more aesthetically pleasing design and user experience on the web. Worked with project managers to manage client relationships, projects, timelines, budgets, and customer satisfaction during time as an Architecture Associate. Recently graduated from University of Washington with a certificate in Full Stack Development. Previously graduated from the University of Southern California with a Bachelor of Science in GeoDesign. Comfortable working with HTML, CSS, responsive design, JavaScript, jQuery, and local storage. Excellent working with Github for deployment and collaboration, and API, JSON, and AJAX for API interaction. Developing skills in Node.js. Active problem solver with a passion for user experience and project management. Successfully worked with a team as a project manager to create an application that allows users to find cocktail recipes, information on beer, and local grocery stores and breweries - this application illustrates a sleek user experience with mobile responsiveness from Materialize and DOM manipulation from JavaScript. I believe I will be an asset to any team to create more efficient, user friendly applications, within timelines and budget.</p>
            <a href="https://www.linkedin.com/in/nicole-remy-190202166/">LinkedIn</a>
            <a href="https://github.com/nicoleremy95">Github</a>
            </Row>
        </div>
    )
}
