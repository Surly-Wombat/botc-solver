import { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';

import PlayerSelect from '../player-select';

export default function VirginSurvival({ players, onChange }) {
    const [virgin, setVirgin] = useState(0);
    const [nominator, setNominator] = useState(1);

    useEffect(() => {
        onChange({ virgin: 0, nominator: 1 });
    }, []);

    function handleVirginChange(e) {
        setVirgin(e.target.value);
        onChange({ virgin: e.target.value, nominator });
    }

    function handleNominatorChange(e) {
        setNominator(e.target.value);
        onChange({ virgin, nominator: e.target.value });
    }

    return (
        <>
            <Form.Group>
                <Form.Label>Virgin</Form.Label>
                <PlayerSelect players={players} value={virgin} onChange={handleVirginChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Nominator</Form.Label>
                <PlayerSelect players={players} value={nominator} onChange={handleNominatorChange} />
            </Form.Group>
        </>
    )
}