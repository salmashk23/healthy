import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/header.js';
import Footer from '../../parts/footer/footer.js';
import ArticaleContent from './articale_content/articale_content.js';


class Articales extends React.Component {
    render(){
        return (
            <div className="container-fluid">
                <Header/>
                <ArticaleContent/>
                <Footer/>
            </div>
        );
    }
}

export default Articales;
