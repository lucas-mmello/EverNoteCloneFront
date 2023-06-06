import React, { useState } from "react";
import { Navbar, Container, Buttons, Button } from "react-bulma-companion";
import LogoImage from "../../assets/images/logo.png";
import "../../styles/header.scss";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <Navbar.Item>
            <img src={LogoImage} width="112" height="28" />
          </Navbar.Item>
          <Navbar.Burger onClick={() => setOpenMenu(!openMenu)} />
        </Navbar.Brand>
        <Navbar.Menu id="navbarOpen" active={openMenu}>
          <Navbar.Item component="a">Home</Navbar.Item>
          <Navbar.Item component="a">Documentation</Navbar.Item>
          <Navbar.End>
            <Navbar.Item>
              <Buttons>
                <Button color="primary">
                  <strong>Sign up</strong>
                </Button>
                <Button color="light">Log in</Button>
              </Buttons>
            </Navbar.Item>
          </Navbar.End>
        </Navbar.Menu>
      </Container>
    </Navbar>
  );
}

export default Header;
