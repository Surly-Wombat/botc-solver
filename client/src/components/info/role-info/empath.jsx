import { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';

export default function Empath({ onChange }) {
    const [neighbors, setNeighbors] = useState(0);

    useEffect(() => {
        onChange({ neighbors: 0 });
    }, []);

    function handleNeighborsChange(e) {
        setNeighbors(e.target.value);
        onChange({ neighbors: e.target.value });
    }
    
    return (
        <>
        <Form.Group>
            <Form.Label>Evil Neighbors</Form.Label>
            <Form.Select value={neighbors} onChange={handleNeighborsChange}>
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
            </Form.Select>
        </Form.Group>
        </>
    )
}