import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/header.js';
import Footer from '../../parts/footer/footer.js';
import ContentContact from './content_contact/content_contact.js';

class ContactUs extends React.Component {
    render(){
        return (
            <div className="container-fluid">
                <Header/>
                <ContentContact/>
                <Footer/>
            </div>
        );
    }
}

export default ContactUs;
