import Task from './Task';
import './TaskList.css';

function TaskList({ todos, deleteTask, isImportant, taskDone }) {
  const elements = todos.map((todo) => {
    return (
      <li key={todo.id} className="list-group-item">
        <Task
          todo={todo}
          deleteTask={deleteTask}
          isImportant={isImportant}
          taskDone={taskDone}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
}
export default TaskList;
