import { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';

import PlayerSelect from '../../player-select';

export default function FortuneTeller({ players, onChange }) {
    const [player1, setPlayer1] = useState(1);
    const [player2, setPlayer2] = useState(2);
    const [demon, setDemon] = useState(false);

    useEffect(() => {
        onChange({ player1: 1, player2: 2, demon: false });
    }, []);

    function handlePlayer1Change(e) {
        setPlayer1(e.target.value);
        onChange({ player1: e.target.value, player2, demon });
    }

    function handlePlayer2Change(e) {
        setPlayer2(e.target.value);
        onChange({ player1, player2: e.target.value, demon });
    }

    function handleDemonChange(e) {
        setDemon(e.target.checked);
        onChange({ player1, player2, demon: e.target.checked });
    }
    
    return (
        <>
        <Form.Group>
            <Form.Label>Player 1</Form.Label>
            <PlayerSelect players={players} value={player1} onChange={handlePlayer1Change} />
        </Form.Group>
        <Form.Group>
            <Form.Label>Player 2</Form.Label>
            <PlayerSelect players={players} value={player2} onChange={handlePlayer2Change} />
        </Form.Group>
        <Form.Group>
            <Form.Label>Read as Demon?</Form.Label>
            <Form.Check checked={demon} onChange={handleDemonChange} />
        </Form.Group>
        </>
    )
}