import React from 'react';
import SearchBar from '../../general/search/search.js';
import ListItems from './list_items.js';
import './menu.css';

class Menu extends React.Component{
    render(){
        return(
            <nav  id="myNavbar" className="navbar navbar-expand fixed-top" >
                <ListItems menu={this.props.menu}/>
                <SearchBar/>
            </nav>
        );
    }
}
export default Menu;
