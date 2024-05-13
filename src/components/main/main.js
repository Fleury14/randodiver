import React, { useState } from 'react';
import 'main.css';

const MainScreen = (props) => {
    const base_options = {
        allowed: {
            all: true,
            supply: false,
            support: false,
            defense: false,
            orbital: false,
            eagle: false,
        }
    };

    const [options, setOptions] = useState(base_options);

    return (
        <div>
            <div className="title">
                <h1>Helldivers 2 Loadout Randomizer</h1>
            </div>
            <div className="options"></div>
        </div>
    )
}