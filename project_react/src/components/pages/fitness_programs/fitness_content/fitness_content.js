import React from 'react';
import ReactPlayer  from 'react-player';
import {Container, Col, Row} from 'reactstrap';
import CarouselVideo  from "./carousel_video/carousel_video.js"



class FitnessContent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <CarouselVideo video={this.props.content} />
            </div>
        );
      };

    }

export default FitnessContent ;
