import { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';

export default function Chef({ onChange }) {
    const [pairs, setPairs] = useState(0);

    useEffect(() => {
        onChange({ pairs: 0 });
    }, []);

    function handlePairsChange(e) {
        setPairs(e.target.value);
        onChange({ pairs: e.target.value });
    }
    
    return (
        <>
        <Form.Group>
            <Form.Label>Pairs</Form.Label>
            <Form.Select value={pairs} onChange={handlePairsChange}>
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
            </Form.Select>
        </Form.Group>
        </>
    )
}