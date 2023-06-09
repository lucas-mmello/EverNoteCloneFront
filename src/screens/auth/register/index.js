import React, { Fragment } from "react";
import Header from "../../../components/header";
import {
  Columns,
  Column,
  Section,
  Title,
  Container,
  Card,
} from "react-bulma-companion";
import LogoImage from "../../../assets/images/logo.png";
import "../../../styles/auth.scss";
import RegisterForm from "../../../components/auth/register_form";

const Register = () => (
  <Fragment>
    <Header />
    <Section size="medium" className="auth">
      <Container>
        <Columns centered>
          <Column size="3">
            <Card>
              <Card.Content>
                <Section>
                  <Columns centered>
                    <Column size="12">
                      <img src={LogoImage} />
                    </Column>
                  </Columns>

                  <Columns>
                    <Column size="12">
                      <Title
                        size="6"
                        className="has-text-grey has-text-centered"
                      >
                        Your notes on the cloud
                      </Title>
                    </Column>
                  </Columns>
                  <RegisterForm />
                </Section>
              </Card.Content>
            </Card>
          </Column>
        </Columns>
      </Container>
    </Section>
  </Fragment>
);

export default Register;
