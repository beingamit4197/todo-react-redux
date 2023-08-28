import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from '../TodoItem/TodoItem'

const TodoList = () => {
    const taskObject = useSelector((state) => state.todos.data)
    const taskItems = taskObject.map((task) => {
        return <TodoItem task={task} />
    })
    return (<div>{taskItems}</div>)
}

export default TodoList