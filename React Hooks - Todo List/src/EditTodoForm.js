/* eslint-disable no-unused-vars */
import React from "react";
import { TextField } from '@mui/material';
import useInputState from "./hooks/useInputState";

function EditTodoForm({editTodo, id, task, toggleEditForm}) {
    const [value, handleChange, reset] = useInputState(task);
    
    return (
        <form
            onSubmit={(e) => {
            e.preventDefault();
            editTodo(id, value);
            reset();
            toggleEditForm()
            }}
            style={{marginLeft: '1rem', width: '50%'}}
        >
            <TextField value={value} onChange={handleChange} margin="normal"  fullWidth autoFocus />
        </form>
    )
}

export default EditTodoForm