import { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';

import RoleSelect from '../role-select';

export default function OwnRole({ onChange }) {
    const [role, setRole] = useState("washerwoman");

    useEffect(() => {
        onChange({ role: "washerwoman" });
    }, []);

    function handleRoleChange(e) {
        setRole(e.target.value);
        onChange({ role: e.target.value });
    }

    return (
        <>
            <Form.Group>
                <Form.Label>Role</Form.Label>
                <RoleSelect value={role} onChange={handleRoleChange} />
            </Form.Group>
        </>
    )
}