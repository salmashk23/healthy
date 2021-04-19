import React from 'react';
import './search.css';

const SearchBar = () => (
    <form action="/" method="get" className="form-inline">
        <input
            type="text"
            id="header-search"
            placeholder="Search.."
            name="s"
        />
    <button type="submit" className="text-light"><i className="fa fa-search"> </i></button>
    </form>
);

export default SearchBar;
