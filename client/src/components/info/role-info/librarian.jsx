import { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';

import PlayerSelect from '../../player-select';
import RoleSelect from '../../role-select';

export default function Washerwoman({ players, onChange }) {
    const [player1, setPlayer1] = useState(1);
    const [player2, setPlayer2] = useState(2);
    const [role, setRole] = useState("butler");
    const [none, setNone] = useState(false);

    useEffect(() => {
        onChange({ player1: 1, player2: 2, role: "butler", none: false });
    }, []);

    function handlePlayer1Change(e) {
        setPlayer1(e.target.value);
        onChange({ player1: e.target.value, player2, role, none });
    }

    function handlePlayer2Change(e) {
        setPlayer2(e.target.value);
        onChange({ player1, player2: e.target.value, role, none });
    }

    function handleRoleChange(e) {
        setRole(e.target.value);
        onChange({ player1, player2, role: e.target.value, none });
    }

    function handleNoneChange(e) {
        setNone(e.target.checked);
        onChange({ player1, player2, role, none: e.target.checked });
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
            <Form.Label>Role</Form.Label>
            <RoleSelect value={role} onChange={handleRoleChange} />
        </Form.Group>
        <Form.Group>
            <Form.Label>OR none are available</Form.Label>
            <Form.Check checked={none} onChange={handleNoneChange} />
        </Form.Group>
        </>
    )
}