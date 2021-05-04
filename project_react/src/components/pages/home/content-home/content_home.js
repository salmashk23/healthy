import React from 'react';
import ReactDOM from 'react-dom';
import ShortPost from './short_post/short_post.js';
import DemoCarousel from './carousel/carousel.js';
import Psycho from './psychology/psycho.js';


class ContentHome extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="container">
                <ShortPost/>
                <DemoCarousel carousel={this.props.content}/>
                <Psycho/>
            </div>
        )
    }
}
export default ContentHome;
