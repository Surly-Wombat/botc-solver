import { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';

import PlayerSelect from '../../player-select';
import RoleSelect from '../../role-select';

export default function Undertaker({ players, onChange }) {
    const [player, setPlayer] = useState(1);
    const [role, setRole] = useState("washerwoman");

    useEffect(() => {
        onChange({ player: 1, role: "washerwoman" });
    }, []);

    function handlePlayerChange(e) {
        setPlayer(e.target.value);
        onChange({ player: e.target.value, role });
    }

    function handleRoleChange(e) {
        setRole(e.target.value);
        onChange({ player, role: e.target.value });
    }
    
    return (
        <>
        <Form.Group>
            <Form.Label>Player</Form.Label>
            <PlayerSelect players={players} value={player} onChange={handlePlayerChange} />
        </Form.Group>
        <Form.Group>
            <Form.Label>Role</Form.Label>
            <RoleSelect value={role} onChange={handleRoleChange} />
        </Form.Group>
        </>
    )
}