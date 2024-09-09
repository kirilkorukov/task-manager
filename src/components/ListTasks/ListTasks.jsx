import Task from '../Task/Task';
import { useSelector } from 'react-redux';

function ListTasks({activeFilter}) {
    const tasks = useSelector((state) => state.tasks.tasks);
    
    return (
        <ul className="task-list">
            {tasks.map((task) =>
                activeFilter === 'all' || 
                (activeFilter === 'completed' && task.isCompleted) || 
                (activeFilter === 'not-completed' && !task.isCompleted) ? (
                    <li key={task.id}>
                        <Task task={task}/>
                    </li>
                ) : null
            )}
        </ul>
    );
}

export default ListTasks;