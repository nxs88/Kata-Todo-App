import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AppHeader from './components/AppHeader';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import TasksFilter from './components/TasksFilter';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filterName, setFilterName] = useState('All');
  // Добавляем задачу
  const addTaskHandler = (text) => {
    if (!text) {
      return;
    }
    const newTodo = {
      text: text,
      isDone: false,
      isImportant: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };
  // Удаляем задачу
  const deleteTaskHandler = (id) => {
    setTodos(todos.filter((todo) => id !== todo.id));
  };
  // Выделяем задачу
  const isImportantHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        if (id === todo.id) {
          return { ...todo, isImportant: !todo.isImportant };
        }
        return { ...todo };
      })
    );
  };
  // Завршаем задачу
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

  return (
    <div className="todo-app">
      <AppHeader />
      <div className="top-panel d-flex">
        <NewTaskForm addTask={addTaskHandler} />
        <TasksFilter tasksFilter={tasksFilterHandler} />
      </div>
      <TaskList
        todos={filteredTasks}
        deleteTask={deleteTaskHandler}
        isImportant={isImportantHandler}
        taskDone={taskDoneHandler}
      />
    </div>
  );
};
export default App;
