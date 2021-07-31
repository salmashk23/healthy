import React from 'react';
import ListItem from './list_item.js';


class ListItems extends React.Component{
    render(){
        const ListItems = this.props.menu.map((jsonPart,i) => (
            <ListItem key={i} item={jsonPart} /> ));

        return(
            <ul id="myNav" className= "nav-menu navbar-nav ">
                {ListItems}
            </ul>
        );
    }
}

export default ListItems;
