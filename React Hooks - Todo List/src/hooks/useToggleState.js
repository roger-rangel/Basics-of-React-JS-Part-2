/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import { useState } from 'react';

function useToggle(InitialValue = false) {
    const [state, setState] = useState(InitialValue)
    const toggle = () => {
        setState(!state)
    }
    // return piece of state and a function to toggle it
    return [state, toggle] 
};
export default useToggle;