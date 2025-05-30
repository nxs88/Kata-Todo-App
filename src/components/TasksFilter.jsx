import { useState } from 'react';
import './TasksFilter.css';

function TasksFilter({ tasksFilter, clearAllTasks, todos }) {
  const [activeFilter, setActiveFilter] = useState('');
  return (
    <>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => {
            tasksFilter('All');
            setActiveFilter('All');
          }}
          style={{ backgroundColor: activeFilter === 'All' ? 'lightblue' : '' }}
        >
          All
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => {
            tasksFilter('Active');
            setActiveFilter('Active');
          }}
          style={{
            backgroundColor: activeFilter === 'Active' ? 'lightblue' : '',
          }}
        >
          Active
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => {
            tasksFilter('Done');
            setActiveFilter('Done');
          }}
          style={{
            backgroundColor: activeFilter === 'Done' ? 'lightblue' : '',
          }}
        >
          Done
        </button>
      </div>
      <button
        type="button"
        className="btn btn-outline-secondary btn--clear"
        onClick={clearAllTasks}
        disabled={!todos.length}
      >
        Clear All
      </button>
    </>
  );
}

export default TasksFilter;
