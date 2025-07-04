import { formatDistanceToNow } from 'date-fns';
import './Task.css';
import Timer from './Timer';

function Task({
  todo,
  deleteTask,
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
              if (editedTask === '') {
                setEditTaskId('');
                setEditedTask(todo.text);
              } else {
                saveEditedTask(todo.id);
              }
            } else if (e.key === 'Escape') {
              setEditTaskId('');
            }
          }}
        />
      </span>
    );
  }

  return (
    <span className={`todo-list-item  ${todo.isDone ? 'done' : ''}`}>
      <span className="todo-list-item-label">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.isDone}
          onChange={() => {
            taskDone(todo.id);
          }}
        />{' '}
        {todo.text}
      </span>
      <span className="timer">
        <Timer />
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
