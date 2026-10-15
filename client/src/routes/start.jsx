import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PlayerInput from '../components/player-input';

export default function Start() {
    return (
        <div id="start">
            <Container>
                <Row className="m-5">
                    <Col><PlayerInput /></Col>
                </Row>
            </Container>
        </div>
    )
}