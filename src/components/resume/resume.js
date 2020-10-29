import React from 'react'
import '../resume/resume.css'
import { Row, Card } from 'antd'
import resume from "../../images/resume.jpg"

export default function Resume() {

    return (
        <div align="center" className="resume">                
            <Row
                align="center"
            >
                    <a
                        href={resume}
                    >
                        View Resume PDF
                    </a>
            </Row>

            <Row
                align="center"
            >
                <img alt="resume" className="resume-container" src={resume}/>
            </Row>

        </div>

    )
}
