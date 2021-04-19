import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import  DescPsych from './desc_psych.js';
import "./psych.css";


class Notes extends React.Component{
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
                        DescPsych.map((item => {
                            return(
                                <div className="m-5 p-5" id="caro-content">
                                    <h4 className="text-light display-4"> {item.content} </h4>
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

export default Notes;
