import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Signin, Signup, Todolist } from './pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/todo" element={<Todolist />} />
          <Route path="/auth/sigin" element={<Signin />} />
          <Route path="/auth/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
