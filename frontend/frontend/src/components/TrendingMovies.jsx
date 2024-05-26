import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const TrendingMovies = () => {
  return (
    <div className="mt-5">
      <h2 className="text-center mb-4">Trending Movies</h2>
      <Row xs={1} sm={2} md={3} lg={5} className="g-4">
        {/* xs={1} for extra small devices (phones), sm={2} for small devices (tablets), md={3} for medium devices (laptops), lg={5} for large devices (desktops) */}
        {[...Array(5)].map((_, index) => (
          <Col key={index}>
            <Card>
              <Card.Img variant="top" src={`https://via.placeholder.com/300x400?text=Movie${index + 1}`} />
              <Card.Body>
                <Card.Title>Title {index + 1}</Card.Title>
                <Card.Text>
                  Rating: {Math.floor(Math.random() * (10 - 5 + 1)) + 5} {/* Random rating between 5 and 10 */}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TrendingMovies;
