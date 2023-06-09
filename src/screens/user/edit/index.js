import React, { Fragment } from "react";
import {
  Columns,
  Column,
  Section,
  Title,
  Container,
  Card,
  Button,
} from "react-bulma-companion";
import { Link } from "react-router-dom";
import "../../../styles/users.scss";
import HeaderLogged from "../../../components/auth/header_logged";
import UsersEditForm from "../../../components/users/user_edit_form";
import UsersEditFormPassword from "../../../components/users/user_edit_password_form";
import UsersDelete from "../../../components/users/user_delete";

const UserEdit = () => (
  <Fragment>
    <HeaderLogged />
    <Section size="medium" className="users">
      <Container>
        <Columns centered className="users-edit">
          <Column size="4">
            <Title size="5" className="has-text-grey has-text-left">
              Personal Informations
            </Title>
            <Card>
              <Card.Content>
                <UsersEditForm />
              </Card.Content>
            </Card>
          </Column>
        </Columns>

        <Columns centered className="users-edit">
          <Column size="4">
            <Title size="5" className="has-text-grey has-text-left">
              Password
            </Title>
            <Card>
              <Card.Content>
                <UsersEditFormPassword />
              </Card.Content>
            </Card>
          </Column>
        </Columns>
        <Columns centered>
          <Column size="4" className="has-text-left">
            <UsersDelete />
          </Column>
        </Columns>
        <Columns centered>
          <Column size="4" className="has-text-left">
            <Button className="btn">
              <Link to="/notes">Back to notes...</Link>
            </Button>
          </Column>
        </Columns>
      </Container>
    </Section>
  </Fragment>
);

export default UserEdit;
