import React from 'react';
import Header from '../../parts/header/header.js';
import Footer from '../../parts/footer/footer.js';
import Register from './register/register.js';

class RegisterPage extends React.Component {
    constructor() {
    super();
    this.state = { data: [] };
    }

    componentDidMount() {
        fetch(`/register_page`)
        .then(res => res.json())
        .then(json => this.setState({ data: json }));
    }
    render(){
        if (this.state.data.length===0)
            return (<p>ops</p>);
        return (
            <div className="container-fluid">
                <Header header={this.state.data.Header} />
                <Register content={this.state.data.Content}/>
                <Footer footerData={this.state.data.Footer}/>
            </div>
        );
    }
}

export default RegisterPage;
