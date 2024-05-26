import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavbarComponent from './components/Navbar';
import TrendingMovies from './components/TrendingMovies';
import HomeSection from './components/HomeSection';
import './App.css';

function App() {
  return (
    <>
    
      <NavbarComponent />
      <Container className="mt-5">
        <Row>

        <HomeSection />
        </Row>
        <Row >
       <TrendingMovies /> 
        </Row>
      </Container>
    </>
  );
}

export default App;
