import React from 'react';
import SubTitle from './subtitle.js';


import './logo.css';

class Logo extends React.Component{
    render(){
        return(
            <div  id="head" className="text-center" >
                <h1>HEALTHY WEIGHT</h1>
                <SubTitle/>
            </div>
        );
    }
}
export default Logo;
