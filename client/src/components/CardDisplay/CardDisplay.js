import React from 'react'
import { Card, Button, Nav } from 'react-bootstrap';
function CardDisplay(props) {

    const { header, title, text, link } = props;

    return (
        <Card>
            <Card.Header>{header}</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                <Nav.Link href={link}>
                    <Button variant="primary" size="lg">Get Started</Button>
                </Nav.Link>
            </Card.Body>
        </Card>
    );
}

export default CardDisplay;
