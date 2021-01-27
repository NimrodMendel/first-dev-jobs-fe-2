
import React, { useState } from 'react';
import { Container, Nav } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'
import MyProfileNav from './MyProfileNav';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'

const UserUpload = () => {
    // specify upload params and url for your files
  const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }
  
  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
  
  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }
    
    return (
      <Container >
          <MyProfileNav/>
          <Dropzone
          
            getUploadParams={getUploadParams}
            onChangeStatus={handleChangeStatus}
            onSubmit={handleSubmit}
            accept="image/*,audio/*,video/*"
          />
      </Container>
    );
  }

  export default UserUpload;