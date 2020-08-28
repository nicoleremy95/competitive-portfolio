import React,{useState} from 'react'
import '../resume/resume.css'
import { Button, Row } from 'antd'

export default function Resume() {
    const [resume, setResume] = useState({
        isHidden: true, 
        className: 'resume'
    })

    const ResumeNicole =() =>{
        return <div className="resume-container"></div>
    }

    function showResume() {
        setResume({
            isHidden: false,
            className: 'resume'
        })
        
    }
    // const [visibility, setVisibility] = useState({
    //     resume: false,
    //     resumeClass: "resume-hidden"
    // })

    // function showResume (){
    //     if(!visibility.resume){
    //         setVisibility({
    //             resume:false,
    //             resumeClass: "resume-visible"
    //         })
    //     } else{
    //         setVisibility({
    //             resume:true,
    //             resumeClass: "resume-hidden"
    //         })
    //     }
        
    // }
    return (
        <div >
            <Button onClick={showResume}>show resume</Button>
            <Row className="resume">
                {resume.isHidden.false && <ResumeNicole/>}
            </Row>
        </div>
        // <div >
        //     <Button onClick={showResume}>show resume</Button>
        //     <Row className={visibility.resumeClass}>
        //         <h1>resume nicole</h1>
        //     </Row>
        // </div>
    )
}
