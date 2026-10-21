import { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';

import PlayerSelect from '../player-select';

export default function Death({ players, onChange }) {
    const [deadPlayer, setDeadPlayer] = useState(0);

    useEffect(() => {
        onChange({ player: 0 });
    },[]);

    function handlePlayerChange(e) {
        setDeadPlayer(e.target.value);
        onChange({ player: e.target.value });
    }

    return (
        <>
            <Form.Group>
                <Form.Label>Dead Player</Form.Label>
                <PlayerSelect players={players} value={deadPlayer} onChange={handlePlayerChange} />
            </Form.Group>
        </>
    )
}