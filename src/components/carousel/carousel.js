import React, {Component} from 'react'
import {Carousel} from "antd"

export default function CarouselImage() {


      const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };

    return (
        <div>
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>
                        PLANiT
                    </h3>
                </div>s
                <div>
                    <h3 style={contentStyle}>
                        PawsLife
                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        drinkMe
                    </h3>
                </div>
            </Carousel>
        </div>
    )
}
