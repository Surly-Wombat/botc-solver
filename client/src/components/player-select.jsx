import Form from 'react-bootstrap/Form';

export default function PlayerSelect({ players, value, onChange }) {
    function renderPlayers() {
        const res = [];
        players.forEach((player, index) => {
            res.push(<option value={index}>{player}</option>);
        });
        return res;
    }

    return (
        <Form.Select value={value} onChange={onChange}>
            {renderPlayers()}
        </Form.Select>
    )
}