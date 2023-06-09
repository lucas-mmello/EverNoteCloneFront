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
} from "react-bulma-companion";
import { Navigate } from "react-router-dom";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [error, setError] = useState(false);

  if (redirectToLogin) return <Navigate replace to={{ pathname: "/login" }} />;

  return (
    <Fragment>
      <Columns centered>
        <form>
          <Column size="12">
            <Field>
              <Label size="small">Name:</Label>
              <Control>
                <Input
                  type="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  name="name"
                />
              </Control>
            </Field>
            <Field>
              <Label size="small">Email:</Label>
              <Control>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  name="email"
                />
              </Control>
            </Field>
            <Field>
              <Label size="small">Password:</Label>
              <Control>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  name="password"
                />
              </Control>
            </Field>
            <Field>
              <Control>
                <Columns breakpoint="mobile">
                  <Column>
                    <a
                      onClick={(e) => setRedirectToLogin(true)}
                      className="button is-white has-text-custom-purple"
                    >
                      Login or
                    </a>
                  </Column>
                  <Column>
                    <Button color="custom-purple" outlined>
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
