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
import "./skills.css"


export default function skills() {
    return (
        <div className="skills">
            <Row
                align="center"
            >
                <h1>Skills</h1>
            </Row>
            <Row
                className="skills" 
                align="center"
                gutter={{xs:8, sm: 16, md:24, lg:32}}
            >
                <Col 
                >
                            <Icon className= "skill-icon" icon={reactIcon} height="50"/>
                            <Icon className= "skill-icon" icon={antDesign}  height="50"/>
                            <Icon className= "skill-icon" icon={mongodbIcon}  height="50"/>
                            <Icon className= "skill-icon" icon={logoNodejs} height="50" />          
                            <Icon className= "skill-icon" icon={npmIcon}  height="50"/>
                            <Icon className= "skill-icon" icon={materializecssIcon}  height="50" />
                                 
                </Col>
            </Row>
            <Row
                className="skills" 
                align="center"
                gutter={{xs:8, sm: 16, md:24, lg:32}}

            >
                <Col
                    
                >
                            <Icon className= "skill-icon" icon={mysqlIcon}  height="50"/>
                            <Icon className= "skill-icon" icon={html5} height="50" />         
                            <Icon className= "skill-icon" icon={api1} height="50" />
                            <Icon className= "skill-icon" icon={bxlJquery} height="50"/>
                            <Icon className= "skill-icon" icon={javascriptIcon} height="50"/>  
                            <Icon className= "skill-icon" icon={bootstrapIcon} height="50"/>
                            <Icon className= "skill-icon" icon={folderTypeCli} height="50"/> 
                            <Icon className= "skill-icon" icon={githubFilled} height="50"/>   
                </Col>
            </Row>
        </div>
    )
}
