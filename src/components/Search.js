import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${query}`);
  };

  return (
    <form className="d-flex input-group w-auto" onSubmit={handleSubmit}>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="search"
        className="form-control"
        placeholder="Type query"
        aria-label="Search"
      />
      <button
        className="btn btn-outline-primary"
        type="submit"
        data-mdb-ripple-color="dark"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
