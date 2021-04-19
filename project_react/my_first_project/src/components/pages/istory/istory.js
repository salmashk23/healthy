import React from 'react';
import Header from '../../parts/header/header.js';
import Footer from '../../parts/footer/footer.js';
import StoryContent from './istory_content/istory_content.js';


class Istory extends React.Component {
    render(){
        return (
            <div className="container-fluid">
                <Header/>
                <StoryContent/>
                <Footer/>
            </div>
        );
    }
}

export default Istory;
