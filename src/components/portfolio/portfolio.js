import React from 'react'
import {Card} from "antd"
import 'antd/dist/antd.css';
import planitImg from "../../images/planit.png"
import pawsLifeImg from "../../images/pawslife.png"
import drinkMeImg from "../../images/drinkme.png"

const { Meta } = Card;

export default function Portfolio() {
    const pawsLife = {
        name: "PawsLife",
        type: "Group Project",
        role: "Routes, Front End Design, CRUD Functionality",
        description: "This application is a social community website of pet owners and pet service providers.",
        info: "This application is a social community website of pet owners and pet service providers. Pawslife gives the user the ability to create an account as a pet owner of a dog or cat, and or a pet provider for dogs or cats. As an owner, a user can keep track of all of their pets for which they can book provider services. As a provider, a user can post pet care services for other members of pawslife to book. This application has full CRUD for user accounts and CRD for pets and posts."
      }
      const drinkMe = {
        name: "drinkMe",
        type: "Group Project",
        role: "Project Manager",
        description: "Find cocktail recipes, nearby grocery stores for ingredients, and local breweries near you!",
        info: "Don’t feel like going out to a bar or restaurant with your friends to grab a drink? Go ahead and invite them over! No stress if you don’t know what drink to make or how to make it, drinkME allows you to find the drink that fits the mood by giving you the ability to generate recipes on the fly. If you're not in the mood for cocktails, we can also help you find the perfect beer and local brewery so you can be on your way to a night full of memories! This application uses four APIs; Google , Punk, Open Brewery, and CocktailDB. For style, we used Materialize."
      }
      const planit = {
        name: "PLANiT",
        type: "Group Project",
        role: "Project Manager",
        description: "PLANiT is a collaborative travel planning app for groups looking to make the most of their next adventure.",
        info: "PLANiT is a collaborative travel planning app for groups looking to make the most of their next adventure. Users can create planning boards, or maps as we call them, where an unlimited amount of guests can be invited to suggest or vote on plans within user-customized trip catergories (e.g. Resturants, Accommodation, Hikes, Entertainment etc.) The app makes group consensus clear with visual outputs for voting stats and a print itinerary function that ranks the leading suggestions at any given time. Along with a chat room unique to each map, communicating has never been more accessible and centralized. Whether you are trying coordinate plans with a group or are just having fun dreaming about your next vacation, planning a trip has never been easier or as stress free! PLANiT - connecting our world to your plan! PLANiT uses a React.js front end, along with MongoDB to create a robust, full MERN application. Tools and packages that were used to make this application possible include socket.io, nodemailer, react-scroll, react-animate-on-scroll, ant-design, axios, and more. The team has plans to integrate more APIs and features to make PLANiT a travel-prep must-have!"
      } 

      const eatdaburger = {
        name: "Eat Da Burger ",
        type: "homework",
        description: "This application creates a burger logger using MySQL, Node, Express, Express Handlebars, ORM, and an MVC design pattern. You can create a burger, decided if you want to eat it right away or wait, and then once it is logged you can choose to eat it, recreate it, or delete it. This application has full CRUD functionality. This application is deployed to Heroku.",
        info: "",
        github: "",
        app: ""
      }
      const employeeProfiles = {
        name: "",
        type: "homework",
        description: "",
        info: "",
        github: "",
        app: ""
      }
      const weatherDashboard = {
        name: "",
        type: "homework",
        description: "",
        info: "",
        github: "",
        app: ""
      }
      const calendar = {
        name: "",
        type: "homework",
        description: "",
        info: "",
        github: "",
        app: ""
      }
      const codingAssesment = {
        name: "",
        type: "homework",
        description: "",
        info: "",
        github: "",
        app: ""
      }
      const passwordGenerator = {
        name: "",
        type: "homework",
        description: "",
        info: "",
        github: "",
        app: ""
      }
      const workdayScheduler = {
        name: "",
        type: "homework",
        description: "",
        info: "",
        github: "",
        app: ""
      }
      const budgetTracker = {
        name: "",
        type: "homework",
        description: "",
        info: "",
        github: "",
        app: ""
      }
      const employeeTracker = {
        name: "",
        type: "homework",
        description: "",
        info: "",
        github: "",
        app: ""
      }
      const noteTaker = {
        name: "",
        type: "homework",
        description: "",
        info: "",
        github: "",
        app: ""
      }
    //   portfolioArr = [];
    //   portfolioArr.map(item=>{

    //   })
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt={planit.name} src={planitImg} />}
        >
            <Meta title={planit.name} description={planit.ifo} />
        </Card>
       
    )
}
