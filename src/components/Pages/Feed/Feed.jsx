
import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";
import RangeSlider from 'react-bootstrap-range-slider';
import { savePost } from '../../../lip/api';
import { getAllPost } from '../../../lip/api';

import Posts from './Posts';
function Feed() {
    
  const [posts, setPosts] = useState([]);
  const [title, setJobTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('Office');
  const [validErr, setValidErr] = useState('');
  const [ salary , setSalary  ] = useState(3500);
  const [ comments , setComments  ] = useState([]);
  const [ likes , setLikes  ] = useState([]);
  const [ deslikes , setdesLikes  ] = useState([]);
  const [ likesCounter , setLikesCounter  ] = useState(0);
  const [ deslikesCounter , setDeslikesCounter  ] = useState(0);


  useEffect( async () => {
    
    const _getAllPost = await getAllPost();
    let temp = [];
    _getAllPost.jobs.forEach(index => temp.unshift(index));
    setPosts(temp)

  },[]);


  function handleChangeTitle(event) {
    setJobTitle(event.target.value);
  }
  function handleChangeDescription(event) {
    setDescription(event.target.value);
  }
  function handleChangeSelect(event) {
    setLocation(event.target.value);
  }
  function handleSubmit() {
    let job = {
      title: title,
      description: description,
      location: location,
      salary: salary,
      likesCounter,
      deslikesCounter
    }
//---------------------------------------
    let jobPost = {
      job:{
        title: title,
        description: description,
        location: location,
        salary: salary
      } 
    }
//---------------------------------------
    if(job.title !== '' && job.description !== ''){
      
      let temp = posts;
      temp.unshift(job);
      setPosts(temp)
      
      savePost(jobPost)

      setSalary(3500)
      setLocation('Office');
      setDescription('');
      setJobTitle('');
      console.log(posts)
      
      

      setValidErr(false);
      
    }else{
      setValidErr(true);
    }
    
  };
  return (
      <Container>
        <Row className="justify-content-md-center">
              <Col xs lg="6" md="auto">
              <Form>
              <Form.Group controlId="form">
                <Form.Label>Job Title</Form.Label>
                <Form.Control value={title} onChange={handleChangeTitle} type="text"/>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control value={description} onChange={handleChangeDescription} as="textarea" rows={3} />
              </Form.Group>
              <Form.Group controlId="SelectCustom">
              <Form.Label>Location</Form.Label>
              <Form.Control as="select" custom onChange={handleChangeSelect}>
                <option value="Office">Office</option>
                <option value="Remote">Remote</option>
              </Form.Control>
            </Form.Group>
            <Form.Label>Salary NIS</Form.Label>
            <Form.Group as={Row}>
        <Col xs="5">
          <RangeSlider
            min={3500}
            max={20000}
            value={salary}
            onChange={e => setSalary(e.target.value)}
          />
        </Col>
        <Col xs="4">
          <Form.Control value={salary}/>
        </Col>
      </Form.Group>
              <Button variant="primary" onClick={() => handleSubmit(0)}>
                Post Job!
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