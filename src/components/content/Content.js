import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import NavBar from "./Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MyProfile from '../Pages/MyProfile'
import Feed from '../Pages/Feed/Feed'

function Content(props) {
  
    return (
      <Container
        fluid
        className={classNames("content", { "is-open": props.isOpen })}
      >
      <NavBar toggle={props.toggle} />
      <Switch>
          <Route exact path="/">
           <Feed/>
          </Route>
          <Route path="/myprofile">
          <MyProfile/>
          </Route>
      </Switch>
      </Container>
    );
  
}

export default Content;
