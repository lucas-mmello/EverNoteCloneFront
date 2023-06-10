import React, { Fragment, useState, useEffect } from "react";
import { Input, Columns, Column } from "react-bulma-companion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Search(props) {
  const [query, setQuery] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      props.searchNotes(query);
    }
  };

  return (
    <Columns className="is-vcentered" breakpoint="mobile">
      <Column size="9" offset="1">
        <Input
          type="text"
          name={query}
          value={query}
          placeholder="Search note..."
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </Column>
      <Column size="1">
        <a
          href="#"
          onClick={() => {
            props.fetchNotes();
            setQuery("");
          }}
        >
          <FontAwesomeIcon
            icon={faTimes}
            color="grey"
            className="is-pulled-left  "
          />
        </a>
      </Column>
    </Columns>
  );
}

export default Search;
