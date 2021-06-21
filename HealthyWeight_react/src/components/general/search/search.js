import React from 'react';
import {Input, Form, Button} from 'reactstrap';
import './search.css';

class SearchBar extends React.Component {

    render(){
        return(
            <Form action="/" method="get" className="form-inline">
                <Input
                    type="text"
                    id="header-search"
                    placeholder="Search.."
                    
                    name="s"
                />
            <Button type="submit" className="text-light"><i className="fa fa-search"> </i></Button>
            </Form>

        )
    }
}
export default SearchBar;
