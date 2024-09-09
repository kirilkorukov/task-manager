import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { removeTask, changeIsCompleted } from '../../features/tasksSlice';
import { useDispatch } from 'react-redux';
import './Task.css';

function Task({task}) {
    const dispatch = useDispatch();

    return (
            <div className="task">
                <div className="task-text">
                    <Link to={`/view-task/${task.id}`}>
                        {task.isCompleted ? (
                            <p style={{textDecoration: "line-through", color: "green"}}>{task.text}</p>
                        ) : (
                            <p>{task.text}</p>
                        )}
                    </Link>
                </div>

                <button className="button" onClick={() => dispatch(changeIsCompleted(task.id))}>
                    Mark as {task.isCompleted ? 'not completed' : 'completed'}
                </button>

                <button className="button secondary-button" onClick={() => dispatch(removeTask(task.id))}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
    );
}

export default Task;