import React from 'react'
import '../resume/resume.css'
import { Row, Card } from 'antd'
import resume from "../../images/resume.jpg"

export default function Resume() {

    return (
        <div align="center">                
            <Row
                align="center"
            >
                    <a
                        href={resume}
                        className="resume-link"
                    >
                        View Resume PDF
                    </a>
            </Row>

            <Row
                align="center"
                id="resume"
            >
                <img alt="resume" className="resume" src={resume}/>
            </Row>

        </div>

    )
}
