import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer () {

    return (
        <footer className='mt-5'>
         <Container fluid={true}>
             <Row className='border-top justify-content-between p-3'>
                 <Col className='p-0' md={3}>
                 Created by Ray Dunning II
                 </Col>
             </Row>
         </Container>
        </footer>
    )

}








export default Footer;



