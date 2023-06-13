import React, { Fragment, useState, useEffect } from "react";
import {
  Button,
  Field,
  Control,
  Input,
  Columns,
  Column,
  Title,
  Help,
  Label,
  Icon,
} from "react-bulma-companion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserService from "../../../services/users";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";

function UsersEditForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState(null);

  const initializeUser = async () => {
    const user = await JSON.parse(localStorage.getItem("user"));
    setName(user["name"]);
    setEmail(user["email"]);
  };

  useEffect(() => {
    initializeUser();
  }, []);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      await UserService.update({ email: email, name: name });
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <Field>
          <Label className="has-text-grey">Full Name</Label>
          <Control iconsLeft>
            <Input
              type="text"
              value={name || ""}
              onChange={(e) => setName(e.target.value)}
              required
              name="name"
            />
            <Icon size="small" align="left">
              <FontAwesomeIcon icon={faUser} />
            </Icon>
          </Control>
        </Field>
        <Field>
          <Label className="has-text-grey">Email</Label>
          <Control iconsLeft>
            <Input
              type="email"
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
              required
              name="email"
            />
            <Icon size="small" align="left">
              <FontAwesomeIcon icon={faEnvelope} />
            </Icon>
          </Control>
        </Field>

        <Field>
          <Control>
            <Columns>
              <Column className="has-text-right">
                <Button type="submit" color="success" outlined>
                  Update
                </Button>
              </Column>
            </Columns>
          </Control>
        </Field>
        {status == "error" && <Help color="danger">Problem in update</Help>}
        {status == "success" && (
          <Help color="primary">Updated with success</Help>
        )}
      </form>
    </Fragment>
  );
}

export default UsersEditForm;
