import React, { useState } from "react";
import { Navbar, Container, Columns, Column } from "react-bulma-companion";
import LogoImage from "../../assets/images/logo.png";
import "../../styles/header.scss";
import { Link } from "react-router-dom";
import Home from "../../screens/home";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <Navbar.Item>
            <Link to="/">
              <img src={LogoImage} width="112" height="28" />
            </Link>
          </Navbar.Item>
          <Navbar.Burger onClick={() => setOpenMenu(!openMenu)} />
        </Navbar.Brand>
        <Navbar.Menu id="navbarOpen" active={openMenu}>
          <Navbar.End>
            <Navbar.Item>
              <Columns>
                <Column>
                  <Link
                    to="/register"
                    className="button is-outlined is-link has-text-custom-purple"
                  >
                    <strong>Register</strong>
                  </Link>
                </Column>
                <Column>
                  <Link to="/login" className="button is-outlined is-link">
                    Log in
                  </Link>
                </Column>
              </Columns>
            </Navbar.Item>
          </Navbar.End>
        </Navbar.Menu>
      </Container>
    </Navbar>
  );
}

export default Header;
