import React, {useState} from 'react'
import { Row, Col } from 'antd';
import { Link } from 'react-scroll';
import 'antd/dist/antd.css';
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
                <ul className="nicole-section">
                    <li>
                        <h1 className="nicole-text">Nicole Remy. </h1>
                    </li>
                    <li>
                        <h1 className="nicole-text">Full Stack Web Developer. </h1>
                    </li>
                </ul>
                
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
                    <Link to="aboutme"type="text" className="nav-btns">about me</Link> 
                </Row>
                <Row justify="end">
                    <Link to="portfolio"type="text" className="nav-btns">porfolio</Link> 
                </Row>
                <Row justify="end">
                    <Link to="resume" type="text" className="nav-btns">resume</Link> 
                </Row>
            </Col>
        </div>
        </>
    )
}
