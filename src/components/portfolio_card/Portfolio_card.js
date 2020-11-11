import React from 'react'
import { Icon, InlineIcon } from '@iconify/react';
import githubFilled from '@iconify-icons/ant-design/github-filled';

import './Portfolio_card.css'

export default function PortfolioCard(props) {
    return (
      
    <div className="Portfolio-card">
        <div className="Portfolio-name">{props.name}</div>
        <div className="Portfolio-image">
            <img src={props.img} alt={props.name}/>
        </div>
        <div className="Portfolio-role">{props.role}</div>
        <div className="Portfolio-tech">{props.tech}</div>
        <div className="Portfolio-description">{props.description}</div>
        <a href={props.github}> <img className="Portfolio-github"  src="https://img.icons8.com/fluent/48/000000/github.png"/></a>
        <a href={props.app} > <img className="Portfolio-app"  src="https://img.icons8.com/carbon-copy/100/000000/domain.png"/></a>
    </div>
     
    )
}
