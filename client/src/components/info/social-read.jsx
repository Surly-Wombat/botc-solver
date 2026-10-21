import { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';

import PlayerSelect from '../player-select';

export default function SocialRead({ players, onChange }) {
    const [player, setPlayer] = useState(0);
    const [trust, setTrust] = useState(false);

    useEffect(() => {
        onChange({player: 0, trust: false});
    }, []);

    function handlePlayerChange(e) {
        setPlayer(e.target.value);
        onChange({player: e.target.value, trust});
    }

    function handleTrustChange(e) {
        setTrust(e.target.checked);
        onChange({player, trust: e.target.checked});
    }
    
    return (
        <>
            <Form.Group>
                <Form.Label>Player</Form.Label>
                <PlayerSelect players={players} value={player} onChange={handlePlayerChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Trustworthy?</Form.Label>
                <Form.Check checked={trust} onChange={handleTrustChange} />
            </Form.Group>
        </>
    )
}