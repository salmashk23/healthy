import React from 'react';
import ReactDom from 'react-dom'
import MenuItems from './menu_items.js';
import ListItem from './list_item.js';


class ListItems extends React.Component{
    render(){
        const ListItems = MenuItems.map((jsonPart) => (
            <ListItem item={jsonPart} /> ));

        return(
                <ul id="myNav" className= "nav-menu navbar-nav ">
                    {ListItems}
                </ul>
        );
    }
}

export default ListItems;
