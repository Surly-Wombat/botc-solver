import { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';

import PlayerSelect from '../player-select';
import RoleSelect from '../role-select';

import Washerwoman from './role-info/washerwoman';
import Librarian from './role-info/librarian';
import Investigator from './role-info/investigator';
import Chef from './role-info/chef';
import Empath from './role-info/empath';
import FortuneTeller from './role-info/fortune-teller';
import Undertaker from './role-info/undertaker';
import Ravenkeeper from './role-info/ravenkeeper';

export default function InfoClaim({ players, onChange }) {
    const [claimer, setClaimer] = useState(1);
    const [role, setRole] = useState("washerwoman");
    const [info, setInfo] = useState({});

    useEffect(() => {
        onChange({ claimer: 1, role: "washerwoman", info: {} });
    }, []);

    function handleClaimerChange(e) {
        setClaimer(e.target.value);
        onChange({ claimer: e.target.value, role, info });
    }

    function handleRoleChange(e) {
        setRole(e.target.value);
        onChange({ claimer, role: e.target.value, info });
    }

    function handleInfoChange(value) {
        setInfo(value);
        onChange({ claimer, role, info: value });
    }

    function renderRoleInfo(role) {
        switch (role) {
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
                <Form.Label>Claimer</Form.Label>
                <PlayerSelect players={players} value={claimer} onChange={handleClaimerChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Their Role</Form.Label>
                <RoleSelect value={role} onChange={handleRoleChange} />
            </Form.Group>
            {renderRoleInfo(role)}
        </>
    )
}