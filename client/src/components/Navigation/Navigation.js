import React from 'react'
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, Container } from 'react-bootstrap';

function Navigation() {
    return (
        <div>
            <Navbar bg="primary">
                <Container>
                    <Navbar.Brand href="/home">Tweet Generator</Navbar.Brand>
                    <Nav defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/generate-tweets">Tweet</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/generate-threads">Thread</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/generate-tags">
                                Hashtags
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </div>

    )
}

export default Navigation
