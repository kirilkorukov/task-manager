import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ViewTask() {
  const { id } = useParams();
  const tasks = useSelector((state) => state.tasks.tasks);
  const findTaskById = (id) => {
      return tasks.find(task => task.id === id);
  };
  const task = findTaskById(id);

  return (
      <div className="container">
          <div className="">
              <h1>Task: {task.text}</h1>
              <Link to="/"><button className="button">Go back to Home</button></Link>
          </div>
      </div>
  );
}

export default ViewTask;