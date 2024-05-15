import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import './options.css';

const Options = (props) => {
    const { options, changeOption } = props;

    console.log('toptios from option page', options, options.allowed)

    function changeFull() {
        const newVal = {
            ...options,
            allowed: {
                ...options.allowed,
                all: !options.allowed.all,
            },
            
        };
        console.log('newval', newVal, 'uhh', !options.allowed.all)
        changeOption(newVal);
    }

    return (
        <div>
            <Form>
                <div>
                    <FormGroup check inline>
                        <Input checked={options.allowed.all} onChange={changeFull} type="checkbox" />
                        <Label check>Full Randomization</Label>
                    </FormGroup>
                </div>
            </Form>
        </div>
    );
}

export default Options;