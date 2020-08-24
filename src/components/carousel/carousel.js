import React from 'react'
import {Carousel, Button} from "antd"
import 'antd/dist/antd.css';
 
export default function CarouselImage() {


      

      const pawsLife = {
        lineHeight: '160px',
        textAlign: 'center',
        color: '#fff',
        height: '160px',
          image: "./images/pawslife.png",
          name: "PawsLife"
      }
      const drinkMe = {
        lineHeight: '160px',
        textAlign: 'center',
        color: '#fff',
        height: '160px',
          image: "./images/drinkme.png",
          name: "drinkMe"
      }
      const planit = {
        lineHeight: '160px',
        textAlign: 'center',
        color: '#fff',
        height: '160px',
        image: "./images/planit.png",
        name: "PLANiT"
      }


        // backgroundImage: '../../../public/images/pawslife.png',

    
    return (
        <>
        <div>
            <Carousel 
                
                autoplay>
                <div>
                    <h3 style={planit}>{planit.name}</h3>
                    <Button
                        type="link"
                    >
                        read more
                    </Button>
                </div>
                <div>
                    <h3 style={pawsLife}>{pawsLife.name}</h3>
                    {/* <img src={pawsLife.imgUrl}></img> */}
                </div>
                <div>
                    <h3 style={drinkMe}>{drinkMe.name}</h3>
                    {/* <img src={drinkMe.imgUrl}></img> */}
                </div>
            </Carousel>
        </div>
        </>
    )
}
