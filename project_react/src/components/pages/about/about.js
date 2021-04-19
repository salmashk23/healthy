import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/header.js';
import Footer from '../../parts/footer/footer.js';
import ContentAbout from './content-about/content_about.js';
import './content-about/content_about.css';

class AboutUs extends React.Component {
    render(){
        return (
            <div className="container-fluid">
                <Header/>
                <ContentAbout/>
                <Footer/>
            </div>
        );
    }
}

export default AboutUs;
