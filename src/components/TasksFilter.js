function TasksFilter({ tasksFilter }) {
  return (
    <div className="btn-group">
      <button
        type="button"
        className="btn btn-info"
        onClick={() => {
          tasksFilter('All');
        }}
      >
        All
      </button>
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => {
          tasksFilter('Active');
        }}
      >
        Active
      </button>
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => {
          tasksFilter('Done');
        }}
      >
        Done
      </button>
      <button type="button" className="btn btn-outline-secondary">
        Clear
      </button>
    </div>
  );
}

export default TasksFilter;
