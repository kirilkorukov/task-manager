import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTask } from '../../features/tasksSlice';

function AddTask() {
    const dispatch = useDispatch();

    const [taskText, setTaskText] = useState('');
    const inputRef = useRef(null);

    const handleAddTaskWithEvent = (e) => {
        e.preventDefault();

        if(e.key !== 'Enter') {
            return;
        }

        addTask(e.target.value);
    };

    const handleAddTaskWithBtn = () => {
        addTask(inputRef.current.value);
    };

    const addTask = (text) => {
        if(text === "") {
            return;
        }

        dispatch(addNewTask(text));
        setTaskText('');
    };

    return (
        <div className="input-box">
            <input 
                type="text"
                className="input-field"
                placeholder="Add a new task here..."
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)} 
                onKeyUp={(e) => handleAddTaskWithEvent(e)} 
                ref={inputRef}
            />

            <button className="button" onClick={handleAddTaskWithBtn}>
                Add Task
            </button>
        </div>
    );
}

export default AddTask;