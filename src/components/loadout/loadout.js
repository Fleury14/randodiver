import React, { useState } from 'react';
import { Button } from 'reactstrap';
import randomizer from '../../helpers/randomize';
import './loadout.css';

const Loadout = (props) => {
    const { options } = props;
    const [loadout, setLoadout] = useState([]);

    function randomize() {
        const result = randomizer(options);
        setLoadout(result);
    }

    function renderLoadout() {
        const render = [];
        loadout.forEach((stratagem, index) => {
            render.push(
                <div className="loadout-stratagem" key={`loadout-${index}`}>
                    <p className="loadout-item-title">{stratagem.name}</p>
                    <p>Type: {stratagem.type}</p>
                </div>
            );
        })
        return render;
    }

    return (
        <div>
            <div className='d-flex justify-content-center'>
                <Button variant="contained" color="primary" onClick={randomize}>Randomize!</Button>
            </div>
            {loadout.length > 0 ? (
                <div className="loadout-container">
                    <p className="loadout-title text-center">YOUR LOADOUT:</p>
                    <div className='d-flex justify-content-between'>
                        {renderLoadout()}
                    </div>
                </div>
            ) : null}
        </div>
    )

}

export default Loadout;