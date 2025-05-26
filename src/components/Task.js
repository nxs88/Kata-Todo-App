import './Task.css';

function Task({ todo, deleteTask, isImportant, taskDone }) {
  return (
    <span
      className={`todo-list-item ${todo.isImportant ? 'important' : ''} ${
        todo.isDone ? 'done' : ''
      }`}
    >
      <span
        className="todo-list-item-label"
        onClick={() => {
          taskDone(todo.id);
        }}
      >
        {todo.text}
      </span>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-end"
        onClick={() => {
          isImportant(todo.id);
        }}
      >
        <i className="fa fa-exclamation" />
      </button>
      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-end"
        onClick={() => {
          deleteTask(todo.id);
        }}
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
}

export default Task;
