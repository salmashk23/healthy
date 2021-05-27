import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/header.js';
import Footer from '../../parts/footer/footer.js';
import DietContent from './diet_content/diet_content.js';

class DietPrograms extends React.Component {
    render(){
        return (
            <div className="container-fluid">
                <Header/>
                <DietContent/>
                <Footer/>
            </div>
        );
    }
}

export default DietPrograms;
