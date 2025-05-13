import React from 'react';
import ReactDOM from 'react-dom/client';
import AppHeader from './components/AppHeader';
import AppSearch from './components/AppSearch';
import TodoList from './components/TodoList';

const App = () => {
  const todos = [
    { label: 'Drink Tea', important: false, id: 1 },
    { label: 'Learn React', important: true, id: 2 },
    { label: 'Get lunch', important: false, id: 3 },
  ];
  return (
    <div>
      <AppHeader />
      <AppSearch />
      <TodoList todos={todos} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
