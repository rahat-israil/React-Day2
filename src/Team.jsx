import { useState } from "react";


const Team = () => {
    const [player, setPlayer] = useState(11);

    const handleAddPlayers = () => {
        const addplayers = player + 1;
        setPlayer(addplayers);
    };

    const handleRemovePlayers = () => {
        const removeplayers = player - 1;
        setPlayer(removeplayers);
    };

    return (
        <div style={{border: '1px solid green', marginTop: '30px', textAlign:'center'}}>
            <h3>Players: {player}</h3>
            <button onClick={handleAddPlayers}>Add Players</button>
            <button onClick={handleRemovePlayers}>Remove Players</button>
        </div>
    );
};

export default Team;