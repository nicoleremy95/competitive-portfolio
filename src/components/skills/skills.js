import React from 'react'
import {Row, Col} from 'antd'
import {Icon} from '@iconify/react';
import materializecssIcon from '@iconify/icons-logos/materializecss';
import mongodbIcon from '@iconify/icons-logos/mongodb';
import mysqlIcon from '@iconify/icons-cib/mysql';
import antDesign from '@iconify/icons-logos/ant-design';
import npmIcon from '@iconify/icons-cib/npm';
import html5 from '@iconify/icons-logos/html-5';
import reactIcon from '@iconify/icons-logos/react';
import bootstrapIcon from '@iconify/icons-logos/bootstrap';
import logoNodejs from '@iconify/icons-fa-brands/node-js';
import bxlJquery from '@iconify/icons-bx/bxl-jquery';
import javascriptIcon from '@iconify/icons-logos/javascript';
import api1 from '@iconify/icons-carbon/api-1';
import folderTypeCli from '@iconify/icons-vscode-icons/folder-type-cli';
import githubFilled from '@iconify/icons-ant-design/github-filled';
import uw from '../../images/uw.jpg'
import usc from '../../images/usc.png'
import "./skills.css"


export default function Skills() {
    return (
        <div className="Skills">
            <div 
                className="Skills-technologies"
                align="center"
            >
                <Icon className= "Skills-icon" icon={reactIcon} height="50"/>
                <Icon className= "Skills-icon" icon={antDesign}  height="50"/>
                <Icon className= "Skills-icon" icon={mongodbIcon}  height="50"/>
                <Icon className= "Skills-icon" icon={logoNodejs} height="50" />          
                <Icon className= "Skills-icon" icon={npmIcon}  height="50"/>
                <Icon className= "Skills-icon" icon={materializecssIcon}  height="50" />
                <Icon className= "Skills-icon" icon={mysqlIcon}  height="50"/>
                <Icon className= "Skills-icon" icon={html5} height="50" />         
                <Icon className= "Skills-icon" icon={api1} height="50" />
                <Icon className= "Skills-icon" icon={bxlJquery} height="50"/>
                <Icon className= "Skills-icon" icon={javascriptIcon} height="50"/>  
                <Icon className= "Skills-icon" icon={bootstrapIcon} height="50"/>
                <Icon className= "Skills-icon" icon={folderTypeCli} height="50"/> 
                <Icon className= "Skills-icon" icon={githubFilled} height="50"/>        
            </div> 
            <div 
                className="Skills-education"
                align="center"
            >
                <img src={uw}/>
                <img src={usc}/>
            </div> 
        </div>
    )
}
