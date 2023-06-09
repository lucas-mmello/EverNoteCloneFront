import React, { Fragment, useState } from "react";
import {
  Navbar,
  Container,
  Column,
  Button,
  Dropdown,
  Columns,
} from "react-bulma-companion";
import LogoImage from "../../../assets/images/logo-white.png";
import "../../../styles/header.scss";
import UserService from "../../../services/users";
import { Navigate, Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

function HeaderLogged(props) {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDrop, setOpenDrop] = useState(false);
  const [redirectToHome, setRedirectToHome] = useState(false);

  const logOut = async () => {
    try {
      await UserService.logout();
      setRedirectToHome(true);
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  };

  const user = localStorage.getItem("user");
  let name = "";

  if (user) {
    const parsedUser = JSON.parse(user);
    name = parsedUser.name;
  }
  const location = useLocation();

  if (redirectToHome == true)
    return <Navigate replace to={{ pathname: "/" }} />;

  return (
    <Navbar className="navbar-logged custom-purple">
      <Container>
        <Navbar.Brand>
          <Navbar.Item>
            <Link to="/logged">
              <img src={LogoImage} width="112" height="28" />
            </Link>
          </Navbar.Item>
          <Navbar.Burger onClick={() => setOpenMenu(!openMenu)} />
        </Navbar.Brand>
        <Navbar.Menu id="navbarOpen" active={openMenu}>
          <Navbar.Item
            as="div"
            className="navbar-item navbar-start"
            align="start"
          >
            {location.pathname === "/notes" && (
              <Button
                className="open-button white"
                outlined
                onClick={() => props.setIsOpen(true)}
              >
                <FontAwesomeIcon icon={faList} />
              </Button>
            )}
          </Navbar.Item>
          <Navbar.End>
            <Navbar.Item as="div">
              <Dropdown active={openDrop} className="drop">
                <Dropdown.Trigger>
                  <Button
                    className="button"
                    color="white"
                    outlined
                    onClick={() => setOpenDrop(!openDrop)}
                  >
                    <span>{name} ▼</span>
                  </Button>
                </Dropdown.Trigger>
                <Dropdown.Menu>
                  <Dropdown.Content>
                    <Dropdown.Item as="div">
                      <Link to="/user/edit">User Edit</Link>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as="div">
                      <a href="#" onClick={(e) => logOut()}>
                        LogOut
                      </a>
                    </Dropdown.Item>
                  </Dropdown.Content>
                </Dropdown.Menu>
              </Dropdown>
            </Navbar.Item>
          </Navbar.End>
        </Navbar.Menu>
      </Container>
    </Navbar>
  );
}

export default HeaderLogged;
