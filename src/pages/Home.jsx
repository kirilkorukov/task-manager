import React, { useState } from 'react';
import Filter from '../components/Filter/Filter';
import AddTask from '../components/AddTask/AddTask';
import ListTasks from '../components/ListTasks/ListTasks';

function Home() {
    const [activeFilter, setActiveFilter] = useState('all');
    return (
        <div className="App">
            <div className="container">
                <h1>Task Manager</h1>

                <AddTask />

                <Filter activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>

                <ListTasks activeFilter={activeFilter} />
            </div>
        </div>
    );
}



export default Home;