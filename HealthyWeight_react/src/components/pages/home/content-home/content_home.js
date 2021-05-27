import React from 'react';
import ShortPost from './short_post/short_post.js';
import DemoCarousel from './carousel/carousel.js';
import Psycho from './psychology/psycho.js';


class ContentHome extends React.Component{
    render(){
        return(
            <div className="container">
                <ShortPost short={this.props.content}/>
                <DemoCarousel carousel={this.props.content.CarouselItems}/>
                <Psycho/>
            </div>
        )
    }
}
export default ContentHome;
