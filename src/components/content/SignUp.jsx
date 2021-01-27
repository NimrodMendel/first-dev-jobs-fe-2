import React, { useState, useContext } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import ReactModal from "react-modal";
import { validatePasswords, signUpNewUser } from "../../lip/api";
import { useGlobal } from "reactn"; // <-- reactn

// ========

export default function SignUp() {
  const [global, setGlobal] = useGlobal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [logo, setLogo] = useState("");
  const [location, setLocation] = useState("");
  const [validationOK, setValidationOK] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [name, setName] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [role, setRole] = useState("Employee");

  const openModel = () => {
    setValidationOK(``);

    setIsOpen(true);
  };
  const closeModel = () => {
    setIsOpen(false);
  };
  const onSignUpSubmit = async (event) => {
    event.preventDefault();
    setValidationOK(``);
    let newUser;
    if (role === "Employee") {
      newUser = {
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        role,
      };
    } else {
      newUser = {
        name,
        email,
        phoneNumber,
        password,
        role,
        location,
        logo,
      };
    }
    const isPasswordsInvalid = await validatePasswords(
      newUser,
      passwordConfirmation
    );
    if (isPasswordsInvalid) {
      setValidationError(isPasswordsInvalid);
    } else {
      const signUpResult = await signUpNewUser(newUser);
      console.log(signUpResult);
      if (signUpResult.id || signUpResult.created) {
        setValidationOK(`new user had been sign up`);
        setFirstName("");
        setLastName("");
        setName("");
        setFirstName("");
        setPhoneNumber("");
        setPassword("");
        setPasswordConfirmation("");
        setEmail("");
      } else if (signUpResult.error === "email already exists") {
        console.log("email already exists");
        setPasswordErrorMessage("email already exists");
      } else {
        console.log("something went really wrong");
      }
    }
  };

  return (
    <>
      <Button className="ml-3" onClick={openModel}>
        Sign Up
      </Button>

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
          {passwordErrorMessage ? (
            <Alert className="m-auto" variant={"danger"}>
              {passwordErrorMessage}
            </Alert>
          ) : (
            ""
          )}
        </div>
        <Card className="my-form">
          <Card.Title className="mx-auto">
            <strong>Sign Up</strong>
          </Card.Title>
          <Card.Body className="p-5">
            <div>
              <Form className="d-inline">
                <Form.Label>type of user</Form.Label>
                <Form.Control
                  as="select"
                  name="type of user"
                  onChange={(event) => {
                    setRole(event.target.value);
                  }}
                >
                  <option value="Employee">Employee</option>
                  <option value="Employer">Employer</option>
                </Form.Control>
              </Form>
            </div>

            <Form
              onSubmit={(event) => {
                onSignUpSubmit(event);
              }}
            >
              {role === "Employee" ? (
                <>
                  {" "}
                  <Form.Group controlId="formFirstName">
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
                  </Form.Group>
                  <Form.Group controlId="formLastName">
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
                  </Form.Group>
                </>
              ) : (
                <>
                  {" "}
                  <Form.Group controlId="formCompanyName">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Company Name"
                      value={name}
                      required
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="formCompanyLogo">
                    <Form.Label>Company Logo</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Company Logo"
                      value={logo}
                      required
                      onChange={(event) => {
                        setLogo(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="formCompanyLocation">
                    <Form.Label>Company Location</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Company Location"
                      value={location}
                      required
                      onChange={(event) => {
                        setLocation(event.target.value);
                      }}
                    />
                  </Form.Group>
                </>
              )}

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
                    setPasswordErrorMessage("");
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
                    if (validationError) {
                      setValidationError("");
                    }
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
                    if (validationError) {
                      setValidationError("");
                    }
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
