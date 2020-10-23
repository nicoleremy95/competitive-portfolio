import React from 'react'
import {Icon,InlineIcon} from '@iconify/react';
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
import {Card, Col, Space, Row} from "antd"
import { Tooltip, Button } from 'antd';
import 'antd/dist/antd.css';
import planitImg from "../../images/planit.png"
import pawsLifeImg from "../../images/pawslife.png"
import drinkMeImg from "../../images/drinkme.png"
import employeeProfilesImg from "../../images/employeeProfilesImg.png"
import passwordGeneratorImg from "../../images/passwordGenerator.png"
import codingAssesmentImg from "../../images/codingAssesment.png"
import budgetTrackerImg from "../../images/budgetTracker.png"
import employeeDirectoryImg from "../../images/employeeDirectory.png"
import './portfolio.css'


export default function Portfolio() {
    return (
        <div className="portfolio">
            <Row className="portfolio">
                
              <Col
                span={4}
                
              >
                  <Card
                  cover={<img alt="planit" src={planitImg}/>}
                  className="cards"
                  >

                  </Card>
                
              </Col>
              <Col
                span={8}
              >
                  <Card
                  cover={<img alt="planit" src={planitImg}/>}
                  className="cards"
                  >

                  </Card>
               
              </Col>
              <Col
                span={4}
              >
              </Col>

               
            
            </Row>
            
        </div>
    )
}
