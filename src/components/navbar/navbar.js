import React, {useState, useEffect} from 'react'
import { Row, Col, Button } from 'antd';

import "./navbar.css"

export default function Navbar() {
    const [menuBtn, setMenuBtn] = useState({
        menuOpen: false,
        menuClass: "menu-btn",
        linksClass: "nav-links",
    })

    const handleMenuClick = () => {
        if (!menuBtn.menuOpen) {
            setMenuBtn({
                menuOpen: !menuBtn.menuOpen,
                menuClass: "menu-btn open"
            })
        } else {
            setMenuBtn({
                menuOpen: !menuBtn.menuOpen,
                menuClass: "menu-btn"            
            })
        }
    }

    return (
        <>
        <div>
            <Row >
                <Col className={menuBtn.menuClass} onClick={handleMenuClick}>
                    <div className="menu-btn_burger"></div>
                </Col>
            </Row>
            {/* <Col className={menuBtn.linksClass}>
                <Row justify="end">
                    <Button type="text" >porfolio</Button> 
                </Row>
                <Row justify="end">
                    <Button type="text" >contact me</Button>  
                </Row>
                <Row justify="end">
                        <Button type="text" >about me</Button> 
                </Row>
            </Col> */}
        </div>
        </>
    )
}
