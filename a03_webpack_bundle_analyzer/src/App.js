import React from 'react';
import './App.css';
import OptimizedUuid from './components/optimizedUuid/OptimizedUuid';

function App() {
  return (
    <div className="app--container">
      <header className="header--container"></header>
      <div>Hello</div>
      <div className="uuid--container">
        <OptimizedUuid yup={1} tup={2} />
      </div>
    </div>
  );
}

export default App;
