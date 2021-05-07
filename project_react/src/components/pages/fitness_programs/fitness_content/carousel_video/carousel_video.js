import React from "react";
import Carousel from "react-multi-carousel";
import {Container} from "reactstrap";
import ReactPlayer  from 'react-player';
import "react-multi-carousel/lib/styles.css";
import "./carousel_video.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 40
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 40
  }
};

class CarouselVideo extends React.Component {
  render() {
    return (
          <Container>
             <h3 className="display-3 text-center mt-5" id="title">
                 Best Videos Of The Week
             </h3>
            <Carousel
                 autoplay={false}
                 responsive={responsive}
                 showDots={true}
                 className="caru">
                     {
                         this.props.video.map((item,i) => {
                             return(
                                 <ReactPlayer key={i}  url={item.video} width={480} controls />

                             )
                     }
                 )
             }
            </Carousel>
        </Container>
    );
  }
}

export default CarouselVideo;
