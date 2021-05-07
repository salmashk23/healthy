import React from 'react';
import Menu from '../../general/menu/menu.js';
import Logo from '../../general/logo/logo.js';


class Header extends React.Component{
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
