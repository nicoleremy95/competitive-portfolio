import React from 'react'
import '../resume/resume.css'
import { Row, Card } from 'antd'
import resume from "../../images/resume.jpg"

export default function Resume() {

    return (
        <div align="center">
            <hr></hr>
            <h1>Resume</h1>
            <br></br>
            <Row className="resume-container" justify="center" id="resume">
                
                <Card
                hoverable
                style={{ width: 700, height:800 }}
                cover={<img alt="resume" src={resume} />}
                >
                </Card>
            </Row>
        </div>

    )
}
