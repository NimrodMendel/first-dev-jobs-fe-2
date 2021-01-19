import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Button, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Login from "./Login";
import SignUp from "./SignUp";
function NavBar(props) {
  const [isLogin, setIsLogin] = useState(false);

  const logInFunc = () => {
    setIsLogin(true);
  };
  const logOutFunc = () => {
    setIsLogin(false);
  };

  return (
    <Navbar
      bg="light"
      className="navbar shadow-sm p-3 mb-5 bg-white rounded"
      expand
    >
      <Button variant="outline-info" onClick={props.toggle}>
        <FontAwesomeIcon icon={faAlignLeft} />
      </Button>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto" navbar>
          {isLogin ? (
            <Button variant="danger" onClick={logOutFunc}>
              Logout
            </Button>
          ) : (
            <>
              {" "}
              <LinkContainer to="/login">
                <Login logInFunc={logInFunc} />
              </LinkContainer>
              <LinkContainer to="/signup">
                <SignUp />
              </LinkContainer>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
