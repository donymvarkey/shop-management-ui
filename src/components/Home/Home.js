import React from 'react';
import { Container, Row, Card, Col, Button, Form } from 'react-bootstrap';
import { ArrowRightSquare } from 'react-bootstrap-icons';

function Home() {
    return(
        <Container>
            <h3 className="mt-5">Shop Invetory Management System</h3>
            <Card className="mx-auto mt-5 rounded" style={{ width: '20rem', height: "20rem", boxShadow: "5px 5px 8px #BDBDBD" }}>
                <Card.Body>
                    <Card.Title><h4>Login to continue</h4></Card.Title>
                    <Form className="mt-5" >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Username" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login <ArrowRightSquare/>
                        </Button>
                    </Form>
                    <p className="mt-3" ><span>New User? <a href="#" >Register Here</a> </span></p>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Home;