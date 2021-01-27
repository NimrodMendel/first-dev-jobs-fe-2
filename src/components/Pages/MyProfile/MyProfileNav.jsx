
import React, { useState } from 'react';
import { Container, Nav } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'


const MyProfile = () => {
    return (
      <Container >
           <Nav variant="tabs" style={{display:'flex', justifyContent:'center'}}>
              <Nav.Item>
              <LinkContainer to="/myprofile">
                <Nav.Link eventKey="link-0">My Profile</Nav.Link>
                </LinkContainer>
              </Nav.Item>
              <Nav.Item>
              <LinkContainer to="/userupload">
                <Nav.Link eventKey="link-1">Upload CV</Nav.Link>
                </LinkContainer>
              </Nav.Item>
              <Nav.Item>
              <LinkContainer to="/feather">
                <Nav.Link eventKey="link-2">Option 3</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            </Nav>
      </Container>
    );
  }

  export default MyProfile;