import React, { useState } from "react";
import BookSearch from "./BooksSearch";

export default function Scroll() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }

  BookSearch(query, pageNumber);
  return (
    <div>
      <input type="text" onChange={handleSearch}></input>
      <div>title</div>
      <div>title</div>
      <div>title</div>
      <div>Loading...</div>

      <div>Error</div>
    </div>
  );
}
