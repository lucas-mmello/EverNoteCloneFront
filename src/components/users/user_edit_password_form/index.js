import React, { Fragment, useState } from "react";
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
import { faKey } from "@fortawesome/free-solid-svg-icons";

function UsersEditFormPassword() {
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (password == password_confirmation) {
      try {
        await UserService.updatePassword({ password: password });
        setStatus("success");
      } catch (err) {
        setStatus("error_update");
      }
    } else {
      setStatus("error_confirmation_password");
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <Field>
          <Label className="has-text-grey">Password</Label>
          <Control iconsLeft>
            <Input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              name="password"
            />
            <Icon size="small" align="left">
              <FontAwesomeIcon icon={faKey} />
            </Icon>
          </Control>
        </Field>
        <Field>
          <Label className="has-text-grey">Password Confirmation</Label>
          <Control iconsLeft>
            <Input
              type="text"
              value={password_confirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              required
              name="password_confirmation"
            />
            <Icon size="small" align="left">
              <FontAwesomeIcon icon={faKey} />
            </Icon>
          </Control>
        </Field>

        <Field>
          <Control>
            <Columns>
              <Column className="has-text-right">
                <Button type="submit" color="success" outlined>
                  Update Password
                </Button>
              </Column>
            </Columns>
          </Control>
        </Field>
        {status == "error_update" && (
          <Help color="danger">Problem in password update</Help>
        )}
        {status == "error_confirmation_password" && (
          <Help color="danger">Password don't match</Help>
        )}
        {status == "success" && (
          <Help color="primary">Updated with success</Help>
        )}
      </form>
    </Fragment>
  );
}

export default UsersEditFormPassword;
