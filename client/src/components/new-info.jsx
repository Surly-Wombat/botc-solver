import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import OwnRole from './info/own-role';
import RoleInfo from './info/role-info';
import Execution from './info/execution';
import Death from './info/death';
import VirginDeath from './info/virgin-death';
import Slayer from './info/slayer';
import SingleClaim from './info/single-claim';
import MultipleClaim from './info/multiple-claim';
import InfoClaim from './info/info-claim';
import SocialRead from './info/social-read';
import VirginSurvival from './info/virgin-survival';

export default function NewInfo({ players }) {
    const [day, setDay] = useState(1);
    const [type, setType] = useState("");
    const [details, setDetails] = useState({});

    function renderExtraControls(type) {
        switch(type) {
            case "own-role":
                return <OwnRole onChange={e => setDetails(e)} />
            case "role-info":
                return <RoleInfo players={players} onChange={e => setDetails(e)} />
            case "execution":
                return <Execution players={players} onChange={e => setDetails(e)} />
            case "death":
                return <Death players={players} onChange={e => setDetails(e)} />
            case "virgin-death":
                return <VirginDeath players={players} onChange={e => setDetails(e)} />
            case "slayer":
                return <Slayer players={players} onChange={e => setDetails(e)} />
            case "single-claim":
                return <SingleClaim players={players} onChange={e => setDetails(e)} />
            case "multiple-claim":
                return <MultipleClaim players={players} onChange={e => setDetails(e)} />
            case "info-claim":
                return <InfoClaim players={players} onChange={e => setDetails(e)} />
            case "social-read":
                return <SocialRead players={players} onChange={e => setDetails(e)} />
            case "virgin-survival":
                return <VirginSurvival players={players} onChange={e => setDetails(e)} />
            default:
                return <></>
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        const data = {day, type, details};
        // TODO: Send info to server
        // TODO: Move new info to "previous info" section on solver page
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>
                    Time of Info
                </Form.Label>
                <Form.Select value={day} onChange={e => setDay(e.target.value)}>
                    <option value={1}>Night/Day 1</option>
                    <option value={2}>Night/Day 2</option>
                    <option value={3}>Night/Day 3</option>
                    <option value={4}>Night/Day 4</option>
                    <option value={5}>Night/Day 5</option>
                    <option value={6}>Night/Day 6</option>
                    <option value={7}>Night/Day 7</option>
                    <option value={8}>Night/Day 8</option>
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>Info Type</Form.Label>
                <Form.Select value={type} onChange={e => setType(e.target.value)}>
                    <option value=""></option>
                    <option value="own-role">Own Role</option>
                    <option value="role-info">Nighttime Role Info</option>
                    <option value="execution">Death (Execution)</option>
                    <option value="death">Death (Nighttime)</option>
                    <option value="no-death">No Death</option>
                    <option value="virgin-death">Hard Confirmation (Virgin Death)</option>
                    <option value="slayer">Slayer Shot</option>
                    <option value="single-claim">Role Claim (Single)</option>
                    <option value="multiple-claim">Role Claim (Multiple)</option>
                    <option value="info-claim">Info Claim</option>
                    <option value="social-read">Social Read</option>
                    <option value="virgin-survival">Survived Nominating Virgin</option>
                </Form.Select>
            </Form.Group>
            {renderExtraControls(type)}
            <Button variant="primary" type="submit">Save</Button>
        </Form>
    )
}