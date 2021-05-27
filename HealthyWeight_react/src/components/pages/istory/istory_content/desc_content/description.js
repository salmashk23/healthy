import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "./description.css";



export default class DescStory extends React.Component{
    render(){
        console.log("hell")
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
                {this.props.desc.Desc.map((item,i) => {
                    return(
                        <div key={i} className="m-5 p-5" id="carousel-content">
                            <h1 className="display-2"> {item.title} </h1>
                            <h3 className="text-light display-3"> {item.content} </h3>
                        </div>
                            )
                        }     
                     )
                 }
            </Carousel>
        );
    }
}
