import { useLocation } from 'react-router-dom';

export default function Solver() {
    const location = useLocation();

    const playerCount = location.state.playerCount;
    const playerNames = location.state.playerNames;
    
    return (
        <div>Solver</div>
    )
}