import { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';

import RoleSelect from '../role-select';

import Washerwoman from './role-info/washerwoman';
import Librarian from './role-info/librarian';
import Investigator from './role-info/investigator';
import Chef from './role-info/chef';
import Empath from './role-info/empath';
import FortuneTeller from './role-info/fortune-teller';
import Undertaker from './role-info/undertaker';
import Ravenkeeper from './role-info/ravenkeeper';

export default function RoleInfo({ players, onChange }) {
    const [role, setRole] = useState("washerwoman");
    const [info, setInfo] = useState({});

    useEffect(() => {
        onChange({ role: "washerwoman", info: {} });
    }, []);

    function handleRoleChange(e) {
        setRole(e.target.value);
        onChange({ role: e.target.value, info });
    }

    function handleInfoChange(value) {
        setInfo(value);
        onChange({ role, info: value });
    }

    function renderRoleInfo(role) {
        switch(role) {
            case "washerwoman":
                return <Washerwoman players={players} onChange={handleInfoChange} />
            case "librarian":
                return <Librarian players={players} onChange={handleInfoChange} />
            case "investigator":
                return <Investigator players={players} onChange={handleInfoChange} />
            case "chef":
                return <Chef onChange={handleInfoChange} />
            case "empath":
                return <Empath onChange={handleInfoChange} />
            case "fortune-teller":
                return <FortuneTeller players={players} onChange={handleInfoChange} />
            case "undertaker":
                return <Undertaker players={players} onChange={handleInfoChange} />
            case "ravenkeeper":
                return <Ravenkeeper players={players} onChange={handleInfoChange} />
            default:
                return <Form.Label>This role does not gain info!</Form.Label>
        }
    }

    return (
        <>
            <Form.Group>
                <Form.Label>Your Role</Form.Label>
                <RoleSelect value={role} onChange={handleRoleChange} />
            </Form.Group>
            {renderRoleInfo(role)}
        </>
    )
}