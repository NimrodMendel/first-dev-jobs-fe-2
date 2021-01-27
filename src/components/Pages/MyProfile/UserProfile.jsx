
import React, { useState } from 'react';
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'
import MyProfileNav from './MyProfileNav';

const UserProfile = () => {
    return (
      <Container >
          <MyProfileNav/>
            <Form style={{marginTop:'40px'}}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="API email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="phoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" placeholder="API phoneNumber" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="API firstName" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="API lastName" />
                    </Form.Group>
                </Form.Row>
                

    

            <Button variant="primary" type="submit">
                   Save Change!
                </Button>
            </Form>
      </Container>
    );
  }

  export default UserProfile;