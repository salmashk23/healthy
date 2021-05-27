import React from 'react';
import Header from '../../parts/header/header.js';
import Footer from '../../parts/footer/footer.js';
import ContentHome from './content-home/content_home.js';
import './content-home/content_home.css';

class Home extends React.Component {
    render(){
        return (
            <div className="container-fluid">
                <Header/>
                <ContentHome/>
                <Footer/>
            </div>
        );
    }
}

export default Home;
