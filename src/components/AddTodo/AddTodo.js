import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../../actions';
import cuid from 'cuid';

const AddTodo = () => {
    const [ tasks, setTasks] = useState('')
    const dispatch = useDispatch();
    
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(addTodo({task: tasks, id: cuid()}));
        e.target.userInput.value = '';
    }

    function handleChange(e) {
        setTasks(e.target.value);
    }
  return (
    <form onSubmit={handleSubmit}>
        <input placeholder='enter your todos' type='text' name='userInput' onChange={ (e) => handleChange(e)}/>
        <button type='submit'>Create</button>
    </form>
  )
}

export default AddTodo