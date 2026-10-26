import { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';

import PlayerSelect from '../player-select';
import RoleMultiSelect from '../role-multi-select';

export default function MultipleClaim({ players, onChange }) {
    const [player, setPlayer] = useState(1);
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        onChange({ player: 1, roles: [] });
    }, []);

    function handlePlayerChange(e) {
        setPlayer(e.target.value);
        onChange({ player: e.target.value, roles });
    }

    function handleRoleChange(value) {
        setRoles(value);
        onChange({ player, roles: value });
    }

    return (
        <>
            <Form.Group>
                <Form.Label>Player</Form.Label>
                <PlayerSelect players={players} value={player} onChange={handlePlayerChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Roles</Form.Label>
                <RoleMultiSelect onChange={handleRoleChange} />
            </Form.Group>
        </>
    )
}