import React, { Fragment, useState } from "react";
import {
  Button,
  Field,
  Control,
  Input,
  Columns,
  Column,
  Section,
  Help,
  Label,
  Icon,
} from "react-bulma-companion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { Navigate } from "react-router-dom";
import UserService from "../../../services/users";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const user = await UserService.register({
        name: name,
        email: email,
        password: password,
      });
      setRedirectToLogin(true);
    } catch (error) {
      setError(true);
    }
  };

  if (redirectToLogin) return <Navigate replace to={{ pathname: "/login" }} />;

  return (
    <Fragment>
      <Columns centered>
        <form onSubmit={handleSubmit}>
          <Column size="12">
            <Field>
              <Label size="small">Name:</Label>
              <Control iconsLeft>
                <Input
                  type="text"
                  value={name}
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
                      onClick={(e) => setRedirectToLogin(true)}
                      className="button  has-text-custom-purple btn"
                    >
                      Login or
                    </a>
                  </Column>
                  <Column>
                    <Button type="submit" className="is-success" outlined>
                      Register
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

export default RegisterForm;
