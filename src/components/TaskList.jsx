import Task from './Task';
import './TaskList.css';

function TaskList({
  todos,
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
  if (!todos.length) {
    return <h2 style={{ textAlign: 'center' }}>Список задач пуст</h2>;
  }

  const elements = todos.map((todo) => {
    return (
      <li key={todo.id} className="list-group-item">
        <Task
          todo={todo}
          deleteTask={deleteTask}
          isImportant={isImportant}
          taskDone={taskDone}
          editTask={editTask}
          saveEditedTask={saveEditedTask}
          editTaskId={editTaskId}
          setEditTaskId={setEditTaskId}
          editedTask={editedTask}
          setEditedTask={setEditedTask}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
}
export default TaskList;
