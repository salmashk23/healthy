import React from 'react';
import ReactDOM from 'react-dom';
import ShortPost from './short_post/short_post.js';
import DemoCarousel from './carousel/carousel.js';
import Psycho from './psychology/psych.js';


class ContentHome extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <ShortPost/>
                <DemoCarousel/>
                <Psycho/>
            </div>
        )
    }
}
export default ContentHome;
