import React from 'react';
import ReactDOM from 'react-dom';
import Notes from './notes.js';
import Psycho from './psych.js';


class PsychContent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="container">
                <Notes note={this.props.content}/>
                <h3 className="display-3 text-center mt-5" id="title" > Our Psychologists </h3>
                <Psycho psych={this.props.content}/>
            </div>
        )
    }
}
export default PsychContent;
