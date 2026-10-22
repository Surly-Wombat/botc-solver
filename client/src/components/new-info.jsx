import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import OwnRole from './info/own-role';
import RoleInfo from './info/role-info';
import Execution from './info/execution';
import Death from './info/death';
import Virgin from './info/virgin';
import SingleClaim from './info/single-claim';
import MultipleClaim from './info/multiple-claim';
import InfoClaim from './info/info-claim';
import SocialRead from './info/social-read';

export default function NewInfo({ players }) {
    const [type, setType] = useState("");
    const [details, setDetails] = useState({});

    function renderExtraControls(type) {
        switch(type) {
            case "own-role":
                return <OwnRole onChange={e => setDetails(e)} />
            case "role-info":
                return <RoleInfo />
            case "execution":
                return <Execution players={players} onChange={e => setDetails(e)} />
            case "death":
                return <Death players={players} onChange={e => setDetails(e)} />
            case "virgin":
                return <Virgin players={players} onChange={e => setDetails(e)} />
            case "single-claim":
                return <SingleClaim players={players} onChange={e => setDetails(e)} />
            case "multiple-claim":
                return <MultipleClaim />
            case "info-claim":
                return <InfoClaim />
            case "social-read":
                return <SocialRead players={players} onChange={e => setDetails(e)} />
            default:
                return <></>
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        const data = {type, details};
        // TODO: Send info to server
        alert(JSON.stringify(data));
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Info Type</Form.Label>
                <Form.Select value={type} onChange={e => setType(e.target.value)}>
                    <option value=""></option>
                    <option value="own-role">Own Role</option>
                    <option value="role-info">Nighttime Role Info</option>
                    <option value="execution">Death (Execution)</option>
                    <option value="death">Death (Nighttime)</option>
                    <option value="no-death">No Death</option>
                    <option value="virgin">Hard Confirmation (Virgin)</option>
                    <option value="single-claim">Role Claim (Single)</option>
                    <option value="multiple-claim">Role Claim (Multiple)</option>
                    <option value="info-claim">Info Claim</option>
                    <option value="social-read">Social Read</option>
                </Form.Select>
            </Form.Group>
            {renderExtraControls(type)}
            <Button variant="primary" type="submit">Save</Button>
        </Form>
    )
}