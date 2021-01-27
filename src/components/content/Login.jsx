import React, { useState, useContext } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import ReactModal from "react-modal";
import { loginUser, getUserById } from "../../lip/api";
import { useHistory } from "react-router-dom";
import { useGlobal } from "reactn"; // <-- reactn

// ========

export default function Login({ logInFunc }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [role, setRole] = useState("Employee");
  const history = useHistory();
  const [userId, setUserId] = useGlobal("userId");
  const [userObject, setUserObject] = useGlobal("userObject");

  const [Global, setGlobal] = useGlobal();

  // ========

  const openModel = () => {
    setPassword("");
    setErrorMessage("");
    setEmail("");
    setIsOpen(true);
  };
  const closeModel = () => {
    setIsOpen(false);
  };
  const onLoginSubmit = async (event) => {
    event.preventDefault();
    const loginObject = { role, email, password };
    const loginResult = await loginUser(loginObject);
    if (loginResult.error) {
      setErrorMessage("Email or password are incorrect");
    }
    if (loginResult.id) {
      await setUserId(loginResult.id);
      await history.push(`/${Global.userId}`);
      console.log("Global.userId :>> ", Global.userId);

      const userToLogin = { id: Global.userId, role: role };

      const getUserByIdResult = await getUserById(userToLogin);
      console.log("getUserByIdResult :>> ", getUserByIdResult);
      if (getUserByIdResult) {
        await setUserObject(getUserByIdResult);
        console.log("Global :>> ", Global);
        await logInFunc();
      }
    }
  };

  return (
    <>
      <Button onClick={openModel}>login</Button>
      <ReactModal ariaHideApp={false} isOpen={isOpen}>
        <Button onClick={closeModel}> close</Button>
        <Card className="my-form">
          <h2>Log In</h2>
          {errorMessage ? <Alert variant={"danger"}>{errorMessage}</Alert> : ""}
          <Card.Body>
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
                onLoginSubmit(event);
              }}
            >
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  required
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (errorMessage) {
                      setErrorMessage("");
                    }
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
                    if (errorMessage) {
                      setErrorMessage("");
                    }
                  }}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Log In
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </ReactModal>
    </>
  );
}
