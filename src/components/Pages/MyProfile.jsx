import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

import EditUser from "../content/EditUser";

function MyProfile() {
  return (
    <Container>
      <h1>My Profile</h1>
      <EditUser />
    </Container>
  );
}

export default MyProfile;
