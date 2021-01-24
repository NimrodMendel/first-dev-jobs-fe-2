
import React, { useState } from 'react';
import { Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
function Posts(props) {
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
          
    <div class="panel">
    <div class="panel-body">
    <div class="media-block">
      <a class="media-left" href="#"><img class="img-circle img-sm" alt="Profile Picture" src="https://bootdey.com/img/Content/avatar/avatar1.png"/></a>
      <div class="media-body">
        <div class="mar-btm">
          <a href="#" class="btn-link text-semibold media-heading box-inline">Lisa D.</a>
          <p class="text-muted text-sm"><i class="fa fa-globe fa-lg"></i> - From Web - 2 min ago</p>
        </div>
        <h3>{props.post.jobTitle}</h3>
        <p>{props.post.description}</p>
        <div class="pad-ver">
          <div class="btn-group">
            <a class="btn btn-sm btn-default btn-hover-success" href="#"><i class="fa fa-thumbs-up">11</i></a>
            <a class="btn btn-sm btn-default btn-hover-danger" href="#"><i class="fa fa-thumbs-down">2222</i></a>
          </div>
          <a class="btn btn-sm btn-default btn-hover-primary" href="#">Comment</a>
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