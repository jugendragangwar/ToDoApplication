import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoForm from './Component/TodoForm'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoForm/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
