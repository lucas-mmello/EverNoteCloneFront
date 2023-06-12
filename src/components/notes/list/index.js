import React, { Fragment } from "react";
import {
  Button,
  Columns,
  Column,
  Tag,
  Title,
  Box,
} from "react-bulma-companion";
import Moment from "moment";
import "../../../styles/notes.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ListNotes(props) {
  return (
    <Fragment>
      <Columns breakpoint="mobile">
        <Column size="6" offset="1">
          <Title size="6">{props.notes.length} Notes</Title>
        </Column>
        <Column size="2">
          <Button
            state="active"
            className="btn"
            outlined
            size="small"
            onClick={() => props.createNote()}
          >
            Notes +
          </Button>
        </Column>
      </Columns>
      <ul className="notes-list">
        {props.notes.map((item) => (
          <div key={item._id}>
            <Box
              className={`custom-box ${
                item === props.current_note ? "is-active" : ""
              }`}
              onClick={() => props.selectNote(item._id)}
              active={item === props.current_note ? "true" : "false"}
              title="Clique para editar essa nota..."
            >
              <Title size="6">
                {item.title.replace(/(<([^>]+)>)/gi, "").substring(0, 15)}
              </Title>
              <Title size="6" subtitle spaced={false}>
                {item.body.replace(/(<([^>]+)>)/gi, "").substring(0, 30)}
              </Title>

              <Columns breakpoint="mobile">
                <Column size="10">
                  <Tag color="dark">
                    {Moment(item.created_at).format("DD/MM")}
                  </Tag>
                </Column>
                <Column size="2">
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => props.deleteNote(item)}
                    color="grey"
                    className="icon"
                  />
                </Column>
              </Columns>
            </Box>
          </div>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListNotes;
