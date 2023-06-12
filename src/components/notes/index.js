import React, { Fragment, useEffect, useState } from "react";
import "../../styles/notes.scss";
import { push as Menu } from "react-burger-menu";
import { Columns, Column } from "react-bulma-companion";
import ListNotes from "./list";
import NoteService from "../../services/notes";
import Editor from "./editor";
import Search from "./search";

const Notes = (props) => {
  const [notes, setNotes] = useState([]);
  const [current_note, setCurrentNote] = useState({
    title: "",
    body: "",
    id: "",
  });

  async function fetchNotes() {
    try {
      const response = await NoteService.index();
      if (response.data.length >= 1) {
        setNotes(response.data.reverse());
        setCurrentNote(response.data[0]);
      } else {
        setNotes([]);
      }
    } catch (error) {
      console.log("Erro ao buscar as notas:", error);
    }
  }

  const createNote = async (params) => {
    try {
      await NoteService.create();
      fetchNotes();
    } catch (error) {
      console.log("Erro ao criar a nota:", error);
    }
  };

  const deleteNote = async (note) => {
    try {
      await NoteService.delete(note._id);
      fetchNotes();
    } catch (error) {
      console.log("Erro ao excluir a nota:", error);
    }
  };

  const updateNote = async (oldNote, params) => {
    try {
      const updatedNote = await NoteService.update(oldNote._id, params);
      const index = notes.indexOf(oldNote);
      const newNotes = notes;
      newNotes[index] = updatedNote.data;
      setNotes(newNotes);
      setCurrentNote(updatedNote.data);
    } catch (error) {
      console.log("Erro ao atualizar a nota:", error);
    }
  };

  const searchNotes = async (query) => {
    try {
      const response = await NoteService.search(query);
      setNotes(response.data);
    } catch (error) {
      console.log("Erro ao pesquisar notas:", error);
    }
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
              <Search searchNotes={searchNotes} fetchNotes={fetchNotes} />
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
