import React from 'react';
import Header from '../../parts/header/header.js';
import Footer from '../../parts/footer/footer.js';
import ContentContact from './content_contact/content_contact.js';

class ContactUs extends React.Component {
    constructor() {
        super();
        this.state = { data: [] };
    }
    componentDidMount() {
        fetch(`/contact`)
            .then(res => res.json())
            .then(json => this.setState({ data: json }));
    }
    render(){
        if (this.state.data.length===0)
            return (<p>ops</p>);
        return (
            <div className="container-fluid">
                <Header header={this.state.data.Header}/>
                <ContentContact content={this.state.data.Content}/>
                <Footer footerData={this.state.data.Footer}/>
            </div>
        );
    }
}

export default ContactUs;
