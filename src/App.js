import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
      isImportant: false,
      id: uuidv4(),
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

  return (
    <div className="todo-app">
      <AppHeader />
      <div className="top-panel d-flex">
        <NewTaskForm addTask={addTaskHandler} />
        <TasksFilter
          tasksFilter={tasksFilterHandler}
          clearAllTasks={clearAllTasksHandler}
        />
      </div>
      <TaskList
        todos={filteredTasks}
        deleteTask={deleteTaskHandler}
        isImportant={isImportantHandler}
        taskDone={taskDoneHandler}
        editTask={editTaskHandler}
        saveEditedTask={saveEditedTaskHandler}
        editTaskId={editTaskId}
        setEditTaskId={setEditTaskId}
        editedTask={editedTask}
        setEditedTask={setEditedTask}
      />
    </div>
  );
};
export default App;
