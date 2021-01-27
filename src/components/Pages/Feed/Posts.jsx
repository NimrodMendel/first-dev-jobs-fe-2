
import React, { useState } from 'react';
import { Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
function Posts(props) {
  const [ likesCounter, setLikesCounter ] = useState(0);
  const [ deslikesCounter , setDeslikesCounter  ] = useState(0);
    return (
  <>
           {/* <Card style={{marginTop:'30px'}}>
            <Card.Header>Date</Card.Header>
            <Card.Body>
                <Card.Title>{props.post.jobTitle}</Card.Title>
                <Card.Text>
               { props.post.description}
                </Card.Text>
            </Card.Body>
        </Card> */}
          
    <div className="panel">
    <div className="panel-body">
    <div className="media-block">
      <a className="media-left" href="#"><img className="img-circle img-sm" alt="Profile Picture" src="https://bootdey.com/img/Content/avatar/avatar1.png"/></a>
      <div className="media-body">
        <div className="mar-btm">
          <a href="#" className="btn-link text-semibold media-heading box-inline">Lisa D.</a>
          <p className="text-muted text-sm"><i className="fa fa-globe fa-lg"></i> - From Web - 2 min ago</p>
          <p className="text-muted text-sm">Location:{' ' + props.post.location}</p>
          <p className="text-muted text-sm">Salary:{' ' + props.post.salary }</p>
        </div>
        <h3>{props.post.title}</h3>
        <p>{props.post.description}</p>
        <div className="pad-ver">
          <div className="btn-group">
            <a className="btn btn-sm btn-default btn-hover-success"><i className="fa fa-thumbs-up" onClick={() => setLikesCounter(likesCounter + 1)}>{likesCounter}</i></a>
            <a className="btn btn-sm btn-default btn-hover-danger"><i className="fa fa-thumbs-down" onClick={() => setDeslikesCounter(deslikesCounter + 1)}>{deslikesCounter}</i></a>
          </div>
          <a className="btn btn-sm btn-default btn-hover-primary" href="#">Comment</a>
        </div>
        <hr/>
        </div>
        </div>
        </div>
        </div>
   </>       

    );
  }

  export default Posts;