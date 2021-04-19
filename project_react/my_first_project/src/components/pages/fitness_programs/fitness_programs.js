import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/header.js';
import Footer from '../../parts/footer/footer.js';
import FitnessContent from './fitness_content/fitness_content.js';


class FitnessPrograms extends React.Component {
    render(){
        return (
            <div className="container-fluid">
                <Header/>
                <FitnessContent/>
                <Footer/>
            </div>
        );
    }
}

export default FitnessPrograms;
