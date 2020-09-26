import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
//import { useDispatch, useSelector } from 'react-redux';

/**
 * Seite "Home"
 */
const Home = () => {
  return (
    <section className='home'>
      <Container>
        <Row>
          <Col>
            <h1>Home</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
