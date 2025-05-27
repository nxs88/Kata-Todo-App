import { formatDistanceToNow } from 'date-fns';
import './Task.css';

function Task({
  todo,
  deleteTask,
  isImportant,
  taskDone,
  editTask,
  saveEditedTask,
  editTaskId,
  setEditTaskId,

  editedTask,
  setEditedTask,
}) {
  if (editTaskId === todo.id) {
    return (
      <span className="todo-list-item">
        <input
          type="text"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              saveEditedTask(todo.id);
            } else if (e.key === 'Escape') {
              setEditTaskId('');
            }
          }}
          autoFocus
        />
      </span>
    );
  }

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
        className="btn btn-outline-danger btn-sm float-end"
        onClick={() => {
          deleteTask(todo.id);
        }}
      >
        <i className="fa fa-trash-o" />
      </button>
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
        className="btn btn-outline-success btn-sm float-end"
        onClick={() => {
          editTask(todo.id, todo.text);
        }}
      >
        <i className="fa fa-edit" />
      </button>
      <div style={{ fontSize: '10px', color: 'lightgray' }}>
        Created {formatDistanceToNow(todo.createdAt, { includeSeconds: true })}{' '}
        ago
      </div>
    </span>
  );
}

export default Task;
