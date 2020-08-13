import React, { useState } from "react";
import useBookSearch from "./useBooksSearch";

export default function Scroll() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }
  const { loading, error, books, hasMore } = useBookSearch(query, pageNumber);
  return (
    <div>
      <input type="text" onChange={handleSearch}></input>
      {books.map((book) => {
        return <div key={book}>{book}</div>;
      })}
      <div>{loading && "Loading..."}</div>
      <div>{error && "error..."}</div>
    </div>
  );
}
