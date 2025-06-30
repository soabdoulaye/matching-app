import React from 'react';
import Register from './components/Register';
import Login from './components/Login';

const App: React.FC = () => {
  return (
    <div>
      <h1>Matching App</h1>
      <Register />
      <Login />
    </div>
  );
};

export default App;
