import React from 'react'

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
        <div className="Portfolio-github">{props.github}</div>
        <div className="Portfolio-app">{props.app}</div>
    </div>
     
    )
}
