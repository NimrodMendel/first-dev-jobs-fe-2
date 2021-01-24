
import React, { useState } from 'react';
import { Container, Nav } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'
import MyProfileNav from './MyProfileNav';

const Feather = () => {
    return (
      <Container >
          <MyProfileNav/>
          Feather
      </Container>
    );
  }

  export default Feather;