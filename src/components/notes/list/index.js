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

function ListNotes(props) {
  return (
    <Fragment>
      <Columns breakpoint="mobile">
        <Column size="6" offset="1">
          <Title size="6">{props.notes.length} Notes</Title>
        </Column>
      </Columns>
      <ul className="notes-list">
        {props.notes.map((item, key) => (
          <div>
            <Box
              className={`custom-box ${
                item === props.current_note ? "is-active" : ""
              }`}
              key={key}
              onClick={() => props.selectNote(item._id)}
              active={item == props.current_note}
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
              </Columns>
            </Box>
          </div>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListNotes;
