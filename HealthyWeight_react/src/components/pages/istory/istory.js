import React from 'react';
import Header from '../../parts/header/header.js';
import Footer from '../../parts/footer/footer.js';
import IstoryContent from './istory_content/istory_content.js';


class Istory extends React.Component {
    constructor() {
        super();
        this.state = { data: [] };
    }
    componentDidMount() {
        fetch('/istory')
            .then(res => res.json())
            .then(json => this.setState({ data: json }));
  }
    render(){
        console.log("istory",this.props.data)
        if (this.state.data.length===0)
            return (<p>ops</p>);

        return (
            <div className="container-fluid">
                <Header header={this.state.data.Header} />
                <IstoryContent 
                    content={this.state.data.Content}
                    picture_url={this.state.data.picture_url}/>
                <Footer footerData={this.state.data.Footer} />
            </div>
        );
    }
}

export default Istory;
