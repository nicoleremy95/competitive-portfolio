import React from 'react'
import { Icon, InlineIcon } from '@iconify/react';
import githubFilled from '@iconify-icons/ant-design/github-filled';

import './Portfolio_card.css'

export default function PortfolioCard(props) {
    return (
      
    <div className="Portfolio-card">
        <a className="Portfolio-name" href={props.app} target="_blank">{props.name}</a>
        <div className="Portfolio-container">
            <div className="Portfolio-image">
                <a href={props.app} target="_blank"><img src={props.img} alt={props.name}/></a>
                    <div className="Portfolio-middle">
                        <div className="Portfolio-text">click for website</div>
                    </div>
            </div>
        </div>
        <div className="Portfolio-role">{props.role}</div>
        <div className="Portfolio-tech">{props.tech}</div>
        <div className="Portfolio-description">{props.description}</div>
        <a href={props.github} target="_blank"> <img className="Portfolio-icon"  src="https://img.icons8.com/fluent/48/000000/github.png"/></a>
        <a href={props.app} target="_blank"> <img className="Portfolio-icon"   src="https://img.icons8.com/ios-filled/48/000000/application-window.png"/></a>
    </div>
     
    )
}
