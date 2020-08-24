import React, {useState, useEffect} from 'react'
import { Row, Col, Button } from 'antd';

import "./navbar.css"

export default function Navbar() {
    const [menuBtn, setMenuBtn] = useState({
        menuOpen: false,
        menuClass: "menu-btn",
        linksClass: "nav-links"
    })

    const handleMenuClick = () => {
        if (!menuBtn.menuOpen) {
            setMenuBtn({
                menuOpen: !menuBtn.menuOpen,
                menuClass: "menu-btn open",
                linksClass: "nav-links open"
            })
        } else {
            setMenuBtn({
                menuOpen: !menuBtn.menuOpen,
                menuClass: "menu-btn",
                linksClass: "nav-links"

            })
        }
    }

    return (
        <>
        <div>
            <Row justify="start" className="nicole">
                <h1 className="nicole-text">Nicole.</h1>
            </Row>
           
        </div>
        <div className="wrapper">
            <Row justify="end">
                <Col className={menuBtn.menuClass} onClick={handleMenuClick}>
                    <div className="menu-btn_burger"></div>
                </Col>
            </Row>
        </div>
        <div className= "wrapper">
            <Row justify="end">
                <Col className={menuBtn.menuClass} onClick={handleMenuClick}>
                    <div className="menu-btn_burger"></div>
                </Col>
            </Row>
            <Col className={menuBtn.linksClass}>
                <Row justify="end">
                    <a to="porfolio"type="text" className="nav-btns">porfolio</a> 
                </Row>
                <Row justify="end">
                    <a to="contactme" type="text" className="nav-btns">contact me</a>  
                </Row>
                <Row justify="end">
                    <a to="aboutme"type="text" className="nav-btns">about me</a> 
                </Row>
                <Row justify="end">
                    <a to="resume" type="text" className="nav-btns">resume</a> 
                </Row>
            </Col>
        </div>
        </>
    )
}
