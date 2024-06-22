
import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div class="search">
    <input placeholder="Search..." type="text"/>
    <button type="submit">Go</button>
    </div>
  );
}

export default SearchBar;

