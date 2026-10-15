import { useState } from 'react'

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
        players.push(<FloatingLabel label="You"><Form.Control placeholder="You" disabled /></FloatingLabel>);
        for(let i = 1; i < playerCount; i++) {
            players.push(
            <FloatingLabel label={`Player ${i + 1} name`}>
                <Form.Control className="mt-2" value={playerNames[i]} onChange={e => updatePlayerNames(i, e.target.value)} />
            </FloatingLabel>
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
            <Form.Group className="mb-3" controlId="playerCount">
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
            <Form.Group controlId="playerNames">
                {renderPlayerNames(playerCount)}
            </Form.Group>
            <Button className="mt-3" variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}