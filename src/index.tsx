import React from 'react';
import ReactDOM from 'react-dom/client';
import SimpleToDo from './SimpleToDo';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    < SimpleToDo/>
  </React.StrictMode>
);

