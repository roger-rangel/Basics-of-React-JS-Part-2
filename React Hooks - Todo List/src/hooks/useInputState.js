/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import { useState } from 'react';

export default InitialValue => {
    const [value, setValue] = useState(InitialValue);
    const handleChange = e => {
        setValue(e.target.value)
    };
    const reset = () => {
        setValue("");
    };
    return [value, handleChange, reset];
};