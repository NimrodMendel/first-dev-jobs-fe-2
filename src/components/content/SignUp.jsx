import React, { useState, useContext } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import ReactModal from "react-modal";
import { useHistory } from "react-router-dom";

// ========

export default function SignUp() {
  const historyFunc = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  // const contextData = useContext(mainContext);
  const [isOpen, setIsOpen] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [validationOK, setValidationOK] = useState("");

  const [isSignUp, setIsSignUp] = useState(false);
  // ========

  if (isSignUp) {
    historyFunc.push("./HomePageOpen");
  }

  const openModel = () => {
    setValidationOK(``);

    setIsOpen(true);
  };
  const closeModel = () => {
    setIsOpen(false);
  };
  const onSignUpSubmit = async (event) => {
    // event.preventDefault();
    // setValidationOK(``);
    // const newUser = {
    //   name,
    //   email,
    //   phoneNumber,
    //   password,
    // };
    // const isPasswordsInvalid = validatePasswords(newUser, passwordConfirmation);
    // setValidationError(isPasswordsInvalid);
    // if (isPasswordsInvalid) {
    //   return;
    // } else {
    //   const userSignIn = await signUpNewUser(newUser);
    //   if (userSignIn === "Email already in use") {
    //     setValidationError("Email already in use, pick new Email or Log in");
    //   } else if (userSignIn === "ok") {
    //     setValidationOK(`${name} had been sign in`);
    //     setName("");
    //     setEmail("");
    //     setPassword("");
    //     setPasswordConfirmation("");
    //     setPhoneNumber("");
    //   }
    // }
  };
  return (
    <>
      <Button onClick={openModel}>Sign Up</Button>

      <ReactModal ariaHideApp={false} isOpen={isOpen}>
        <div className="d-flex">
          <Button onClick={closeModel}> close</Button>
          {validationOK ? (
            <Alert className="m-auto" variant={"success"}>
              {validationOK}
            </Alert>
          ) : (
            ""
          )}

          {validationError ? (
            <Alert className="m-auto" variant={"danger"}>
              {validationError}
            </Alert>
          ) : (
            ""
          )}
        </div>
        <Card className="my-form">
          <Card.Title className="mx-auto">
            <strong>Sign Up</strong>
          </Card.Title>
          <Card.Body>
            <Form
              onSubmit={(event) => {
                onSignUpSubmit(event);
              }}
            >
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter First and Lest Name"
                  value={name}
                  required
                  onChange={(event) => {
                    setName(event.target.value);
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
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPasswordConfirmation">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Re-Enter Password"
                  required
                  value={passwordConfirmation}
                  onChange={(event) => {
                    setPasswordConfirmation(event.target.value);
                  }}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </ReactModal>
    </>
  );
}
