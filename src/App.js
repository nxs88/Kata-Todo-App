import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import AppHeader from './components/AppHeader';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import TasksFilter from './components/TasksFilter';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filterName, setFilterName] = useState('All');
  const [editTaskId, setEditTaskId] = useState('');
  const [editedTask, setEditedTask] = useState('');
  // Добавляем задачу
  const addTaskHandler = (text) => {
    if (!text) {
      return;
    }
    const newTask = {
      text: text,
      isDone: false,
      id: uuidv4(),
      createdAt: new Date(),
    };
    setTodos([...todos, newTask]);
  };
  // Завершаем задачу
  const taskDoneHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        if (id === todo.id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return { ...todo };
      })
    );
  };
  // Удаляем завершенные задачи
  const clearDoneTasksHandler = () => {
    setTodos(todos.filter((todo) => !todo.isDone));
  };
  // Редактируем задачу
  const editTaskHandler = (id, text) => {
    setEditTaskId(id);
    setEditedTask(text);
  };
  // Сохраняем отредактированную задачу
  const saveEditedTaskHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        if (id === todo.id) {
          return { ...todo, text: editedTask };
        }
        return todo;
      })
    );
    setEditTaskId('');
  };

  // Удаляем задачу
  const deleteTaskHandler = (id) => {
    setTodos(todos.filter((todo) => id !== todo.id));
  };
  // Удаляем все задачи
  const clearAllTasksHandler = () => {
    setTodos([]);
  };
  // Фильтры
  const tasksFilterHandler = (name) => {
    setFilterName(name);
  };
  const filteredTasks = todos.filter((todo) => {
    if (filterName === 'All') return true;
    if (filterName === 'Done') return todo.isDone;
    if (filterName === 'Active') return !todo.isDone;
    return true;
  });
  // Счетчик активных задач
  const activeTasksCount = todos.filter((todo) => todo.isDone).length;
  return (
    <div className="todo-app">
      <AppHeader />
      {activeTasksCount > 0 ? (
        <h6>
          {`You have completed ${activeTasksCount} ${
            activeTasksCount > 1 ? 'todos' : 'todo'
          }`}{' '}
          of {todos.length}
        </h6>
      ) : (
        <h6>There is no completed tasks</h6>
      )}
      <div className="top-panel d-flex">
        <NewTaskForm addTask={addTaskHandler} />
        <TasksFilter
          tasksFilter={tasksFilterHandler}
          clearAllTasks={clearAllTasksHandler}
          todos={filteredTasks}
        />
      </div>

      <TaskList
        todos={filteredTasks}
        deleteTask={deleteTaskHandler}
        taskDone={taskDoneHandler}
        editTask={editTaskHandler}
        saveEditedTask={saveEditedTaskHandler}
        editTaskId={editTaskId}
        setEditTaskId={setEditTaskId}
        editedTask={editedTask}
        setEditedTask={setEditedTask}
      />
      <button
        type="button"
        className={`btn btn-success ${activeTasksCount ? 'active' : ''}`}
        onClick={clearDoneTasksHandler}
      >
        Clear completed tasks
      </button>
    </div>
  );
};
export default App;
