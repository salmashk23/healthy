import React from 'react';

class ListItem extends React.Component{
    render(){
        return(
            <li className="nav-item" >
                <a className={this.props.item.cName} href={this.props.item.url}>
                    {this.props.item.title}
                </a>
            </li>
        );
    }
}

export default ListItem;
