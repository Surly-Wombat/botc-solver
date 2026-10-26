import { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';

import PlayerSelect from '../../player-select';
import RoleSelect from '../../role-select';

export default function Investigator({ players, onChange }) {
    const [player1, setPlayer1] = useState(1);
    const [player2, setPlayer2] = useState(2);
    const [role, setRole] = useState("poisoner");

    useEffect(() => {
        onChange({ player1: 1, player2: 2, role: "poisoner" });
    }, []);

    function handlePlayer1Change(e) {
        setPlayer1(e.target.value);
        onChange({ player1: e.target.value, player2, role });
    }

    function handlePlayer2Change(e) {
        setPlayer2(e.target.value);
        onChange({ player1, player2: e.target.value, role });
    }

    function handleRoleChange(e) {
        setRole(e.target.value);
        onChange({ player1, player2, role: e.target.value });
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
        </>
    )
}