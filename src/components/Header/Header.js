import React from 'react';
import {Nav} from 'react-bootstrap';

function Header() {
    return(
        <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/register">Register</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Header