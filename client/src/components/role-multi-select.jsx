import { useState } from 'react';

import Form from 'react-bootstrap/Form';

export default function RoleMultiSelect({ onChange }) {
    const roles = ["Washerwoman", "Librarian", "Investigator", "Chef", "Empath", "Fortune Teller", "Undertaker", "Monk", "Ravenkeeper", "Virgin", "Slayer", "Soldier", "Mayor", "Butler", "Saint", "Recluse"];
    const roleArr = [];
    roles.forEach((role) => {
        const id = role.toLowerCase().replaceAll(" ", "-");
        roleArr.push({ id: id, label: role, checked: false });
    })
    const [items, setItems] = useState(roleArr);

    function handleItemChange(id) {
        const newArr = [];
        items.forEach((item) => {
            newArr.push(item.id === id ? { ...item, checked: !item.checked } : item);
        });
        setItems(newArr);

        const output = [];
        newArr.forEach((item) => {
            if(item.checked) output.push(item.id);
        });
        onChange(output);
    };

    return (
        <Form>
            {items.map((item) => (
                <Form.Check
                    key={item.id}
                    type="checkbox"
                    id={item.id}
                    label={item.label}
                    checked={item.checked}
                    onChange={() => handleItemChange(item.id)}
                />
            ))}
        </Form>
    );
}
