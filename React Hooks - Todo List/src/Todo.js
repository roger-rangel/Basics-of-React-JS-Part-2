/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import { ListItem, ListItemText, Checkbox, ListItemSecondaryAction, IconButton} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material'
import useToggleState from './hooks/useToggleState'
import EditTodoForm from "./EditTodoForm";

function Todo({task, completed, removeTodo, id, toggleTodo, editTodo}) {
  const [isEditing, toggle] = useToggleState()
  
  return (
    <ListItem style={{height: '64px'}}>
    {isEditing ? <EditTodoForm editTodo={editTodo} id={id} task={task} toggleEditForm={toggle} /> : 
    <>
    <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
      <ListItemText style={{textDecoration: completed ? "line-through": "none" }}>
        {task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete" onClick={() => removeTodo(id)} >
        <Delete />
        </IconButton>  
        <IconButton aria-label="Edit" onClick={toggle}>
        <Edit />
        </IconButton>   
      </ListItemSecondaryAction>
    </>
        }
    </ListItem>
  );
}

export default Todo;