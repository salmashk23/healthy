import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import  DescItems from './desc_items.js';
import "./description.css";


export default class DescStory extends React.Component{
    render(){
        return (
                <Carousel
                    autoPlay={true}
                    infiniteLoop={true}
                    showStatus={false}
                    showThumbs={false}
                    showArrows={false}
                    showIndicators={false}
                    interval={4000}
                    >
                    {
                        DescItems.map((item => {
                            return(
                                <div className="m-5 p-5" id="carousel-content">
                                    <h1 className="display-2"> {item.title} </h1>
                                    <h3 className="text-light display-3"> {item.content} </h3>
                                </div>
                                    )
                                }
                            )
                        )
                    }
                </Carousel>
            );
        }
    }
