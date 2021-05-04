import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../../general/menu/menu.js';
import Logo from '../../general/logo/logo.js';



class Header extends React.Component{
    constructor(props) {
    super(props);
  }
    render(){
        return(
            <div className="container-fluid">
                <Menu menu={this.props.header}/>
                <Logo/>
            </div>
        )
    }
}
export default Header;
