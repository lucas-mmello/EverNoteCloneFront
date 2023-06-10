import React, { Fragment, useEffect, useState } from "react";
import "../../styles/notes.scss";
import { push as Menu } from "react-burger-menu";
import { Columns, Column } from "react-bulma-companion";
import ListNotes from "./list";
import NoteService from "../../services/notes";
import Editor from "./editor";

const Notes = (props) => {
  const [notes, setNotes] = useState([]);
  const [current_note, setCurrentNote] = useState({
    title: "",
    body: "",
    id: "",
  });

  async function fetchNotes() {
    const response = await NoteService.index();
    if (response.data.length >= 1) {
      setNotes(response.data.reverse());
      setCurrentNote(response.data[0]);
    } else {
      setNotes([]);
    }
  }

  const createNote = async (params) => {
    await NoteService.create();
    fetchNotes();
  };

  const deleteNote = async (note) => {
    await NoteService.delete(note._id);
    fetchNotes();
  };

  const updateNote = async (oldNote, params) => {
    const updatedNote = await NoteService.update(oldNote._id, params);
    const index = notes.indexOf(oldNote);
    const newNotes = notes;
    newNotes[index] = updatedNote.data;
    setNotes(newNotes);
    setCurrentNote(updatedNote.data);
  };

  const selectNote = (id) => {
    const note = notes.find((note) => {
      return note._id == id;
    });
    setCurrentNote(note);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <Fragment>
      <Columns className="notes" id="notes">
        <Menu
          pageWrapId={"notes-editor"}
          isOpen={props.isOpen}
          onStateChange={(state) => props.setIsOpen(state.isOpen)}
          disableAutoFocus
          outerContainerId={"notes"}
          customBurgerIcon={false}
          customCrossIcon={false}
        >
          <Columns>
            <Column size="10" offset="1">
              Search...
            </Column>
          </Columns>
          <ListNotes
            notes={notes}
            selectNote={selectNote}
            current_note={current_note}
            createNote={createNote}
            deleteNote={deleteNote}
          />
        </Menu>

        <Column size="12" className="notes-editor" id="notes-editor">
          <Editor note={current_note} updateNote={updateNote} />
        </Column>
      </Columns>
    </Fragment>
  );
};
export default Notes;
