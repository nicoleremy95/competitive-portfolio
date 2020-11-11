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
        <div className="Navbar">
            <ul className="Navbar-title" >
                <li>
                    <h1 className="Navbar-name"><strong>Nicole Remy.</strong> </h1>
                </li>
                <li>
                    <h1 className="Navbar-description">FULL STACK WEB DEVELOPER. </h1>
                </li>
            </ul>
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
                    <Link to="aboutme"type="text" className="nav-btns">ABOUT ME</Link> 
                </Row>
                <Row justify="end">
                    <Link to="skills"type="text" className="nav-btns">SKILLS & EDU</Link> 
                </Row>
                <Row justify="end">
                    <Link to="portfolio"type="text" className="nav-btns">PORTFOLIO</Link> 
                </Row>
                <Row justify="end">
                    <Link to="resume" type="text" className="nav-btns">RESUME</Link> 
                </Row>
            </Col>
        </div>
        </>
    )
}
