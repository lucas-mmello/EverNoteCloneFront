import React, { Fragment, useState } from "react";
import {
  Button,
  Field,
  Control,
  Input,
  Column,
  Section,
  Help,
  Label,
  Columns,
  Icon,
} from "react-bulma-companion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { Navigate } from "react-router-dom";
import UserService from "../../../services/users";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [RedirectToRegister, setRedirectToRegister] = useState(false);
  const [RedirectToNotes, setRedirectToNotes] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      await UserService.login({ email: email, password: password });
      setRedirectToNotes(true);
    } catch (error) {
      setError(true);
    }
  };

  if (RedirectToRegister == true)
    return <Navigate replace to={{ pathname: "/register" }} />;
  else if (RedirectToNotes == true)
    return <Navigate replace to={{ pathname: "/notes" }} />;

  return (
    <Fragment>
      <Columns centered>
        <form onSubmit={handleSubmit}>
          <Column size="12">
            <Field>
              <Label size="small">Email:</Label>
              <Control iconsLeft>
                <Input
                  type="email"
                  value={email}
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
              <Label size="small">Password:</Label>
              <Control iconsLeft>
                <Input
                  type="password"
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
              <Control>
                <Columns breakpoint="mobile">
                  <Column>
                    <a
                      onClick={(e) => setRedirectToRegister(true)}
                      className="button has-text-custom-purple btn"
                    >
                      Register or
                    </a>
                  </Column>
                  <Column>
                    <Button type="submit" className="is-success" outlined>
                      Login
                    </Button>
                  </Column>
                </Columns>
              </Control>
            </Field>
            {error && <Help color="danger">Email or Password invalid</Help>}
          </Column>
        </form>
      </Columns>
    </Fragment>
  );
}

export default LoginForm;
