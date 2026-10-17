import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function RoleSelector({ title, onSubmit }) {
    const [role, setRole] = useState("washerwoman");

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(role);
    }
    
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="role">
                <Form.Label>{title}</Form.Label>
                <Form.Select value={role} onChange={e => setRole(e.target.value)}>
                    <option disabled>Townsfolk</option>
                    <option value="washerwoman">Washerwoman</option>
                    <option value="librarian">Librarian</option>
                    <option value="investigator">Investigator</option>
                    <option value="chef">Chef</option>
                    <option value="empath">Empath</option>
                    <option value="fortune-teller">Fortune Teller</option>
                    <option value="undertaker">Undertaker</option>
                    <option value="monk">Monk</option>
                    <option value="ravenkeeper">Ravenkeeper</option>
                    <option value="virgin">Virgin</option>
                    <option value="slayer">Slayer</option>
                    <option value="soldier">Soldier</option>
                    <option value="mayor">Mayor</option>
                    <option disabled>Outsider</option>
                    <option value="butler">Butler</option>
                    <option value="saint">Saint</option>
                    <option value="recluse">Recluse</option>
                    <option value="drunk">Drunk</option>
                    <option disabled>Minion</option>
                    <option value="poisoner">Poisoner</option>
                    <option value="spy">Spy</option>
                    <option value="baron">Baron</option>
                    <option value="scarlet-woman">Scarlet Woman</option>
                    <option disabled>Demon</option>
                    <option value="imp">Imp</option>
                </Form.Select>
            </Form.Group>
            <Button className="mt-2" type="submit">Submit</Button>
        </Form>
    )
}