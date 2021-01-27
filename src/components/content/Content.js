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
import MyProfileNav from '../Pages/MyProfile/MyProfileNav'
import Feed from '../Pages/Feed/Feed'
import UserProfile from '../Pages/MyProfile/UserProfile';
import UserUpload from '../Pages/MyProfile/UserUpload';
import Feather from '../Pages/MyProfile/Feather';

import MyProfile from "../Pages/MyProfile";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MyProfile from "../Pages/MyProfile";
import Feed from "../Pages/Feed/Feed";
import { useGlobal } from "reactn"; // <-- reactn
import EditUser from "../../components/content/EditUser";
function Content(props) {
  
    return (
      
      <Container
        fluid
        className={classNames("content", { "is-open": props.isOpen })}
      >
  const [userId, setUserId] = useGlobal("userId");

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
          <UserProfile/>
          </Route>
          <Route path="/userupload">
          <UserUpload/>
          </Route>
          <Route path="/feather">
          <Feather/>
          </Route>
        <Route exact path="/">
          <Feed />
        </Route>
        <Route path="/myprofile">
          <MyProfile />
        </Route>
        <Route path="/EditUser" component={EditUser} />
      </Switch>
      </Container>
      
    );
  
}

export default Content;
