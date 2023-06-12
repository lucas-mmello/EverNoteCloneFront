import React, { Fragment } from "react";
import HeaderLogged from "../../../components/auth/header_logged";
import PresentationImage from "../../../assets/images/presentation.png";
import {
  Column,
  Section,
  Title,
  Container,
  Columns,
} from "react-bulma-companion";
import "../../../styles/home.scss";
import { Link } from "react-router-dom";

const Logged = () => (
  <Fragment>
    <HeaderLogged />
    <Section size="medium" className="home-logged">
      <Container>
        <Columns>
          <Column size="5">
            <Title size="2" spaced className="has-text-white">
              Capture your ideas and stay organized
            </Title>
            <Title size="5" spaced className="has-text-light" subtitle>
              Our note-taking system simplifies capturing and organizing ideas.
              It provides a versatile and intuitive interface for jotting down
              thoughts, creating plans, and saving important information.
              <br />
              <br />
              With our easy-to-use formatting tools, you can create a personal
              knowledge base tailored to your preferences. Access your notes
              from any device and stay productive wherever you go.
            </Title>
            <Link to="/notes" className="button is-outlined is-white is-large">
              <strong>Start taking notes now!</strong>
            </Link>
          </Column>
          <Column size="6" offset="1">
            <img src={PresentationImage} />
          </Column>
        </Columns>
      </Container>
    </Section>
  </Fragment>
);

export default Logged;
