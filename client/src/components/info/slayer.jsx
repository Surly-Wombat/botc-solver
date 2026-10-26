import { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';

import PlayerSelect from '../player-select';

export default function Slayer({ players, onChange }) {
    const [slayer, setSlayer] = useState(0);
    const [target, setTarget] = useState(1);
    const [died, setDied] = useState(false);

    useEffect(() => {
        onChange({ slayer: 0, target: 1 });
    }, []);

    function handleSlayerChange(e) {
        setSlayer(e.target.value);
        onChange({ slayer: e.target.value, target, died });
    }

    function handleTargetChange(e) {
        setTarget(e.target.value);
        onChange({ slayer, target: e.target.value, died });
    }

    function handleDiedChange(e) {
        setDied(e.target.checked);
        onChange({ slayer, target, died: e.target.checked });
    }

    return (
        <>
            <Form.Group>
                <Form.Label>Slayer</Form.Label>
                <PlayerSelect players={players} value={slayer} onChange={handleSlayerChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Target</Form.Label>
                <PlayerSelect players={players} value={target} onChange={handleTargetChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Died?</Form.Label>
                <Form.Check checked={died} onChange={handleDiedChange} />
            </Form.Group>
        </>
    )
}