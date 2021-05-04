import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/header.js';
import Footer from '../../parts/footer/footer.js';
import Login from './login/login.js';
import Register from './register/register.js';

class LoginRegister extends React.Component {
    constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch(`/login`)
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }
    render(){
        console.log(this.state.data)
        if (this.state.data.length==0)
            return (<p>ops</p>);
        return (
            <div className="container-fluid">
                <Header header={this.state.data.Header} />
                <Login content={this.state.data.Content}/>
                <Footer footerData={this.state.data.Footer}/>
            </div>
        );
    }
}

export default LoginRegister;
