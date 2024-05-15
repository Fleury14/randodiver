import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import './options.css';

const Options = (props) => {
    const { options, changeOption } = props;
    const { allowed } = options;

    console.log('toptios from option page', options, options.allowed)

    function changeFull() {
        const newVal = {
            ...options,
            allowed: {
                ...options.allowed,
                all: !options.allowed.all,
            },
            
        };
        changeOption(newVal);
    }

    function changeGrid(key, index) {
        if (!allowed[key]) {
            throw new Error("Invalid key sent in grid change function");
        }
        const newStatus = allowed[key];
        newStatus[index] = !newStatus[index]
        const newVal = {
            ...options,
            allowed: {
                ...options.allowed,
                [key]: newStatus
            }
        };
        changeOption(newVal);
    }

    function renderGrid() {
        const gridRows = [];
        for(const [key, val] of Object.entries(allowed)) {
            if (key === "all") continue;
            gridRows.push(
                <div className='d-flex justify-content-between align-center strat-grid-row'>
                        <p>{key}</p>
                        <FormGroup check inline>
                            <Input disabled={allowed.all} checked={allowed[key][0]} type="checkbox" onChange={() => changeGrid(key, 0)}/>
                            <Label hidden>Stratagem 1 {key}</Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Input disabled={allowed.all} checked={allowed[key][1]} type="checkbox" onChange={() => changeGrid(key, 1)}/>
                            <Label hidden>Stratagem 2 {key}</Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Input disabled={allowed.all} checked={allowed[key][2]} type="checkbox" onChange={() => changeGrid(key, 2)}/>
                            <Label hidden>Stratagem 3 {key}</Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Input disabled={allowed.all} checked={allowed[key][3]} type="checkbox" onChange={() => changeGrid(key, 3)}/>
                            <Label hidden>Stratagem 4 {key}</Label>
                        </FormGroup>
                    </div>
            );
        }
        return gridRows;
    }

    return (
        <div>
            <Form>
                <div className="options-full-rando">
                    <FormGroup check inline>
                        <Input checked={allowed.all} onChange={changeFull} type="checkbox" />
                        <Label check>Full Randomization</Label>
                    </FormGroup>
                </div>
                <div className='d-flex flex-column'>
                    <div className='d-flex justify-content-between align-center strat-grid-row'>
                        <p></p>
                        <p>Stratagem 1</p>
                        <p>Stratagem 2</p>
                        <p>Stratagem 3</p>
                        <p>Stratagem 4</p>
                    </div>
                    {renderGrid()}
                </div>
            </Form>
        </div>
    );
}

export default Options;