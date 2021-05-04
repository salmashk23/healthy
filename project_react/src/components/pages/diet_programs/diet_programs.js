import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/header.js';
import Footer from '../../parts/footer/footer.js';
import DietContent from './diet_content/diet_content.js';

class DietPrograms extends React.Component {
    constructor() {
    super();
    this.state = { data: [] };

  }
  componentDidMount() {
    fetch('/diet')
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
                <DietContent content={this.state.data.Content}/>
                <Footer footerData={this.state.data.Footer}/>
            </div>
        );
    }
}

export default DietPrograms;
