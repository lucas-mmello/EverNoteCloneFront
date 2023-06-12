import React, { Fragment } from "react";
import Header from "../../components/header";
import PresentationImage from "../../assets/images/presentation.png";
import {
  Column,
  Section,
  Title,
  Container,
  Columns,
} from "react-bulma-companion";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

const Home = () => (
  <Fragment>
    <Header />
    <Section size="medium" className="home">
      <Container>
        <Columns>
          <Column size="5">
            <Title size="2" spaced className="has-text-white">
              Simplify Note-Taking and Stay Organized
            </Title>
            <Title size="5" spaced className="has-text-light" subtitle>
              Our note-taking platform offers an easy and efficient way to
              capture and manage your ideas. Whether you're brainstorming,
              planning, or keeping important information, our user-friendly
              interface is designed to meet all your note-taking needs.
            </Title>
            <Link
              to="/register"
              className="button is-outlined is-white is-large"
            >
              <strong>Register for free Now!</strong>
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

export default Home;
