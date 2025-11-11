

import React from "react";

function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-bar">
      <input
  type="text"
  placeholder="Type a name to search..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>

    </div>
  );
}

export default Search;

