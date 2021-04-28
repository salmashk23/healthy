import React from 'react';
import Header from '../../../parts/header/header.js';
import Footer from '../../../parts/footer/footer.js';
import PsychContent from './psychology_content/psychology_content.js';

class PsychoPage extends React.Component {
    render(){
        return (
            <div className="container-fluid">
                <Header/>
                <PsychContent/>
                <Footer/>
            </div>
        );
    }
}

export default PsychoPage;
