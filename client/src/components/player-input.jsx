import { useState } from 'react'

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function PlayerInput() {
    const [playerCount, setPlayerCount] = useState(5);
    const [playerNames, setPlayerNames] = useState(generatePlayerNames());

    function generatePlayerNames() {
        const res = Array.from({length: 13}, (value, i) => `Player ${i + 1}`);
        res[0] = "";
        return res;
    }

    function updatePlayerCount(e) {
        const val = Number(e.target.value);
        setPlayerCount(val);
    }

    function updatePlayerNames(i, name) {
        const names = [...playerNames];
        names[i] = name;
        setPlayerNames(names);
    }

    function renderPlayerNames(playerCount) {
        const players = [];
        players.push(<Form.Group as={Col} sm={6} md={4} xl={3}><FloatingLabel label="Player 1"><Form.Control className="mb-2" value="You" disabled /></FloatingLabel></Form.Group>);
        for(let i = 1; i < playerCount; i++) {
            players.push(
                <Form.Group as={Col} sm={6} md={4} xl={3}>
            <FloatingLabel label={`Player ${i + 1}`}>
                <Form.Control placeholder="" className="mb-2" value={playerNames[i]} onChange={e => updatePlayerNames(i, e.target.value)} />
            </FloatingLabel>
            </Form.Group>
            );
        }
        return players;
    }

    function handleSubmit(e) {
        e.preventDefault();

        // TODO: actually do something when they submit
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
            <Form.Group as={Col} xs={6} md={4} lg={3} className="mb-3" controlId="playerCount">
                <Form.Label>Number of Players</Form.Label>
                <Form.Select onChange={updatePlayerCount}>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                    <option value={13}>13</option>
                </Form.Select>
            </Form.Group>
            </Row>
            <Row>
                {renderPlayerNames(playerCount)}
            </Row>
            <Button className="mt-3" variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}