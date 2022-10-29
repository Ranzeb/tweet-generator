import React from 'react';
import CardDisplay from '../CardDisplay/CardDisplay';
import { Container, Row, Col } from 'react-bootstrap';
import { Typography } from '@mui/material';

function Home() {
    return (
        <div>
            <Typography
                variant="h3"
                mt={8}
                mb={5}
            >
                AI Tweets Generator
            </Typography>
            <Container>
                <Row>
                    <Col>
                        <CardDisplay
                            header="Tweet Generator"
                            title="Generate Tweets"
                            text="Generate tweets based on input ideas"
                            link="/generate-tweets"
                        />
                    </Col>
                    <Col>
                        <CardDisplay
                            header="Hashtag Generator"
                            title="Generate Hashtags"
                            text="Generate tweets hastags based on your tweet"
                            link="/generate-tags"
                        />
                    </Col>
                    <Col>
                        <CardDisplay
                            header="Thread Generator"
                            title="Generate Thread"
                            text="Generate thread based on input ideas"
                            link="/generate-threads"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home
