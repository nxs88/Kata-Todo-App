import React from 'react';
import './app-search.css';
function AppSearch() {
  const searchStyle = {
    fontSize: '20px',
  };
  return (
    <input
      placeholder="Type to search"
      style={searchStyle}
      className="form-control search-input"
    ></input>
  );
}

export default AppSearch;
