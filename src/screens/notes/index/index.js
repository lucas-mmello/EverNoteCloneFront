import React, { Fragment, useState } from "react";
import HeaderLogged from "../../../components/auth/header_logged";
import Notes from "../../../components/notes";

function NotesIndex() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <HeaderLogged setIsOpen={setIsOpen} />
      <Notes isOpen={isOpen} setIsOpen={setIsOpen} />
    </Fragment>
  );
}

export default NotesIndex;
