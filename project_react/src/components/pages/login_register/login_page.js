import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/header.js';
import Footer from '../../parts/footer/footer.js';
import Login from './login/login.js';
import Register from './register/register.js';

class LoginRegister extends React.Component {
    render(){
        return (
            <div className="container-fluid">
                <Header/>
                <Login/>
                <Footer/>
            </div>
        );
    }
}

export default LoginRegister;
