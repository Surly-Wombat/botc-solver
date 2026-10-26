import { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';

import PlayerSelect from '../../player-select';

export default function FortuneTeller({ players, onChange }) {
    const [player1, setPlayer1] = useState(1);
    const [player2, setPlayer2] = useState(2);
    const [evil, setEvil] = useState(false);

    useEffect(() => {
        onChange({ player1: 1, player2: 2, evil: false });
    }, []);

    function handlePlayer1Change(e) {
        setPlayer1(e.target.value);
        onChange({ player1: e.target.value, player2, evil });
    }

    function handlePlayer2Change(e) {
        setPlayer2(e.target.value);
        onChange({ player1, player2: e.target.value, evil });
    }

    function handleEvilChange(e) {
        setEvil(e.target.checked);
        onChange({ player1, player2, evil: e.target.checked });
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
            <Form.Label>Read as evil?</Form.Label>
            <Form.Check checked={evil} onChange={handleEvilChange} />
        </Form.Group>
        </>
    )
}