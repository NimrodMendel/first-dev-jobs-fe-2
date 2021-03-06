
import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";
import Posts from './Posts';
function Feed() {
    
  const [posts, setPosts] = useState([]);
  const [jobTitle, setJobTitle] = useState('');
  const [description, setDescription] = useState('');
  const [validErr, setValidErr] = useState('');

  function handleChangeJobTitle(event) {
    setJobTitle(event.target.value);
  }
  function handleChangeDescription(event) {
    setDescription(event.target.value);
  }
  function handleSubmit() {
    let obj ={
      jobTitle: jobTitle,
      description: description
    }
    if(obj.jobTitle !== '' && obj.description !== ''){
      
      let temp = posts;
      temp.unshift(obj);
      setPosts(temp)
      
      setDescription('');
      setJobTitle('');

      setValidErr(false);
      
    }else{
      setValidErr(true);
    }
    
  };
  return (
      <Container>
        <Row className="justify-content-md-center">
              <Col xs lg="5" md="auto">
              <Form>
              <Form.Group controlId="form">
                <Form.Label>Title</Form.Label>
                <Form.Control value={jobTitle} onChange={handleChangeJobTitle} type="text"/>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control value={description} onChange={handleChangeDescription} as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary" onClick={() => handleSubmit(0)}>
                Post!
              </Button>
            </Form>
            {validErr ? <Alert key={'danger'} variant={'danger'}>
                          Error
                        </Alert> : <></>}
          {posts.map((post, index)=>{   
        return (
          <div key={index}>
            <Posts post = {post} />
          </div>
        );   
        })}
          
              </Col>
            </Row>

      </Container>
    );
  }

  export default Feed;