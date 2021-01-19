
import React, { useState } from 'react';
import { Card, Button } from "react-bootstrap";

function Posts(props) {
    return (
      <>
           <Card style={{marginTop:'30px'}}>
            <Card.Header>Date</Card.Header>
            <Card.Body>
                <Card.Title>{props.post.jobTitle}</Card.Title>
                <Card.Text>
               { props.post.description}
                </Card.Text>
            </Card.Body>
        </Card>
      </>
    );
  }

  export default Posts;