import React from 'react';

import CarouselVideo  from "./carousel_video/carousel_video.js"



class FitnessContent extends React.Component{
    render(){
        return (
            <div>
                <CarouselVideo video={this.props.content} />
            </div>
        );
      };

    }

export default FitnessContent ;
