import React, { useState, useContext } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import ReactModal from "react-modal";
import { loginUser } from "../../lip/api";
import { useHistory } from "react-router-dom";
import { useGlobal } from "reactn"; // <-- reactn
import { updateUser } from "../../lip/api";
// ========

export default function EditUser() {
  const [Global, setGlobal] = useGlobal();
  const [userObject, setUserObject] = useGlobal("userObject");

  if (Global.userId === "123") {
    console.log("there is no user right now");
  } else {
    console.log("userObject", userObject);
    console.log("userObject", userObject.firstName);
  }

  const [firstName, setFirstName] = useState(userObject.firstName || "");
  const [lastName, setLastName] = useState(userObject.lastName || "");
  const [email, setEmail] = useState(userObject.email || "");
  const [phoneNumber, setPhoneNumber] = useState(userObject.phoneNumber || "");

  // ========

  const onSignUpSubmit = async (event) => {
    event.preventDefault();
    let id = Global.userId;
    const userObject = { firstName, lastName, email, phoneNumber, id };
    console.log("userObject :>> ", userObject);

    const updateUserResult = await updateUser(userObject);
    console.log("updateUserResult :>> ", updateUserResult);
  };

  // ========

  return (
    <>
      <Card className="home-page-card">
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title>
            <div>
              <h1>Profile Settings</h1>
            </div>
          </Card.Title>
          <Form
            onSubmit={(event) => {
              onSignUpSubmit(event);
            }}
          >
            <Form.Group controlId="formName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                value={firstName}
                required
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group controlId="formName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                value={lastName}
                required
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter phoneNumber"
                value={phoneNumber}
                required
                onChange={(event) => {
                  setPhoneNumber(event.target.value);
                }}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                required
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
