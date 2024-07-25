import React from 'react';
import TodoList from '../components/TodoList';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const todoList = [
        {
            id: 1,
            title: 'Task 1'
        },
        {
            id: 2,
            title: 'Task 2'
        },
        {
            id: 3,
            title: 'Task 3'
        }
    ]
    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={todoList} />
        </div>
    );
}

export default TodoFeature;