import React from 'react';
import FitnessCard  from "./fit_programs/fit_programs.js"
import CarouselVideo  from "./carousel_video/carousel_video.js"



class FitnessContent extends React.Component{
    render(){
        return (
            <div>
                <CarouselVideo video={this.props.content.Video} />
                <FitnessCard fit={this.props.content.FitPrograms} />
            </div>
        );
      };
    }

export default FitnessContent ;
