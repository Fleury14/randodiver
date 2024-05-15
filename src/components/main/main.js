import React, { useState } from 'react';
import Options from '../options/options';
import Loadout from '../loadout/loadout';
import './main.css';

const MainScreen = (props) => {
    const base_options = {
        allowed: {
            all: true,
            supply: [ false, false, false, false ],
            support: [ false, false, false, false ],
            defense: [ false, false, false, false ],
            orbital: [ false, false, false, false ],
            eagle: [ false, false, false, false ],
        }
    };

    const [options, setOptions] = useState(base_options);

    return (
        <div className="main">
            <div className="title">
                <h1>Helldivers 2 Loadout Randomizer</h1>
            </div>
            <div className="options">
                <Options options={options} changeOption={setOptions} />
            </div>
            <div className="loadout">
                <Loadout options={options} />
            </div>
        </div>
    )
}

export default MainScreen;