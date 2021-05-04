import React from 'react';
import ReactDOM from 'react-dom';
import TextAbout from './text_about/text_about.js';
import CardAbout from './cards_about/card_about.js';


class ContentAbout extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <TextAbout text={this.props.content}/>
                <CardAbout card={this.props.content}/>
            </div>
        )
    }
}
export default ContentAbout;
