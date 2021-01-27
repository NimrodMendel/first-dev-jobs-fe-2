import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import SubMenu from "./SubMenu";
import { Nav, Button } from "react-bootstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

function SideBar(props) {
  return (
    <div className={classNames("sidebar", { "is-open": props.isOpen })}>
      <div className="sidebar-header">
        <Button
          variant="link"
          onClick={props.toggle}
          style={{ color: "#fff" }}
          className="mt-4"
        >
          <FontAwesomeIcon icon={faTimes} pull="right" size="xs" />
        </Button>
        <h3>{"<First Dev Job>"}</h3>
      </div>

      <Nav className="flex-column pt-2">
        <p className="ml-3">Manu</p>
        {/* className="active" */}

        <Nav.Item>
          <LinkContainer to="/">
            <Nav.Link>
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Feed
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>

        {/* <SubMenu
            title="Pages"
            icon={faCopy}
            items={["Link", "Link2", "Active"]}
          /> */}
        <Nav.Item>
          <LinkContainer to="/myprofile">
            <Nav.Link>
              <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
              My Profile
            </Nav.Link>
            </LinkContainer>
          </Nav.Item>
          
          {/* <Nav.Item>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faImage} className="mr-2" />
              Bla Bla
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faQuestion} className="mr-2" />
              Bla Bla
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
              Bla Bla
            </Nav.Link>
          </Nav.Item> */}
      </Nav>
    </div>
  );
}

export default SideBar;
