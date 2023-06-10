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

const UserEdit = () => (
  <Fragment>
    <HeaderLogged />
    <Section size="medium" className="users">
      <Container>
        <Columns centered className="users-edit">
          <Column size="4">
            <Title size="5" className="has-text-grey has-text-left">
              Informações Pessoais
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
              <Card.Content>Users Edit Password Form...</Card.Content>
            </Card>
          </Column>
        </Columns>
        <Columns centered>
          <Column size="4" className="has-text-right">
            Users Delete Button...
          </Column>
        </Columns>
        <Columns centered>
          <Column size="4" className="has-text-left">
            <Button>
              <Link to="/notes">Voltar para notas...</Link>
            </Button>
          </Column>
        </Columns>
      </Container>
    </Section>
  </Fragment>
);

export default UserEdit;
