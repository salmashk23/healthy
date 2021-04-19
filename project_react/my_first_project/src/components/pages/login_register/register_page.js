import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/header.js';
import Footer from '../../parts/footer/footer.js';
import Register from './register/register.js';


class RegisterPage extends React.Component {
    render(){
        return (
            <div className="container-fluid">
                <Header/>
                <Register/>
                <Footer/>
            </div>
        );
    }
}

export default RegisterPage;
