import React from 'react';
import Header from '../../parts/header/header.js';
import Footer from '../../parts/footer/footer.js';
import ContentHome from './content-home/content_home.js';
import './content-home/content_home.css';

class Home extends React.Component {
    constructor() {
    super();
    this.state = { data: [] };
  }
  componentDidMount() {
    fetch(`/home`)
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }
    render(){
        console.log(this.state.data)
        if (this.state.data.length==0)
            return (<p>ops</p>);
        return (
            <div className="container-fluid">
                <Header header={this.state.data.Header}/>
                <ContentHome content={this.state.data.Content}/>
                <Footer footerData={this.state.data.Footer}/>
            </div>
        );
    }
}

export default Home;
