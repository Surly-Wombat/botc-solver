import { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';

import PlayerSelect from '../player-select';

export default function Execution({ players, onChange }) {
    const [execution, setExecution] = useState(0);

    useEffect(() => {
        onChange({ player: 0 });
    }, []);

    function handlePlayerChange(e) {
        setExecution(e.target.value);
        onChange({ player: e.target.value });
    }

    return (
        <>
            <Form.Group>
                <Form.Label>Executed Player</Form.Label>
                <PlayerSelect players={players} value={execution} onChange={handlePlayerChange} />
            </Form.Group>
        </>
    )
}