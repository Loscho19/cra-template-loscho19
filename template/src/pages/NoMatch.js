import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
//import { useDispatch, useSelector } from 'react-redux';

/**
 * Seite "404"
 */
const NoMatch = () => {
  return (
    <section className='sectionNomatch'>
      <Container>
        <Row>
          <Col>
            <h1>404</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NoMatch;
