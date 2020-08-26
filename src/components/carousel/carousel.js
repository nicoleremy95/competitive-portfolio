import React from 'react'
import {Carousel, Button} from "antd"
import 'antd/dist/antd.css';
import planitb from "../../images/planit.png"

 
export default function CarouselImage() {


      

      const pawsLife = {
        lineHeight: '160px',
        textAlign: 'center',
        color: '#fff',
        height: '160px',
        imageUrl: "../../images/pawslife.png",
        name: "PawsLife",
        background: "#272727"
      }
      const drinkMe = {
        lineHeight: '160px',
        textAlign: 'center',
        color: '#fff',
        height: '160px',
        imageUrl: "../../images/drinkme.png",
        name: "drinkMe",
        background: "#272727"
      }
      const planit = {
        lineHeight: '160px',
        textAlign: 'center',
        color: "#fff",
        height: '160px',
        imageUrl: "../../images/planit.png",
        name: "PLANiT",
        background: "#272727"
      } 


    console.log('planit.imageUrl', planit.imageUrl)
    
    return (
        <>
        <div>
            <Carousel 
                
                autoplay>
                <div>
                    <h3 style={planit}>{planit.name}</h3>
                    <img src={planitb} alt={planit.name}></img>
                    <Button
                        type="link"
                    >
                        read more
                    </Button>
                </div>
                <div>
                    <h3 style={pawsLife}>{pawsLife.name}</h3>
                    <img src="../../images/pawslife.png" alt={pawsLife.name}></img>
                    <Button
                        type="link"
                    >
                        read more
                    </Button>
                </div>
                <div>
                    <h3 style={drinkMe}>{drinkMe.name}</h3>
                    <img src="../../images/drinkme.png" alt={drinkMe.name}></img>
                    <Button
                        type="link"
                    >
                        read more
                    </Button>
                </div>
            </Carousel>
        </div>
        </>
    )
}
