import React from 'react';
import ReactDom from 'react-dom';
import MenuItems from './menu_items.js';

class ListItem extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
                <li className="nav-item" >
                    <a className={this.props.item.cName} activeClassName="active"  href={this.props.item.url}>
                        {this.props.item.title}
                    </a>
                </li>
        );
    }
}

export default ListItem;
