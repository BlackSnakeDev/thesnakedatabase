import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';

const HomeSection = () => {
  return (
            
    <div className="mt-5" style={{ backgroundColor: 'rgba(38, 38, 38)' }}> 
    <Container className="mt-5">
       <Row>
         <Col md={6}>
           <img
             src="https://m.media-amazon.com/images/I/91WlTjCgu4L._AC_UF1000,1000_QL80_.jpgshttps://moviecovers.com/DATA/zipcache/AMERICAN%20FICTION%20(2023).jpg"
             alt="Image"
             style={{ maxWidth: '350px', maxHeight: '600px' }}
           />
         </Col>
         <Col md={6}>
           <h2 className='text-center' style={{ color: '#93c8ff', fontSize: '48px' }}>Title</h2>
           <br />
           <p style={{ fontSize: '20px', fontFamily: 'monospace', color: 'white' }}>Make sure to replace "image-url" with the actual URL of your image. This code adds a margin to separate the Navbar from the grid layout, creates a row with two columns using Bootstrap's grid system, and places an image in the left column and title/description in the right column..</p>
         </Col>
       </Row>
     </Container>
   </div>
  
     
  );
};

export default HomeSection;
