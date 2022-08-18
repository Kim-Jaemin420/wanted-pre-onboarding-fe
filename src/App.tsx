import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SIGNIN_PAGE, SIGNUP_PAGE, TODO_PAGE } from './consts';
import { Signin, Signup, Todolist } from './pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path={TODO_PAGE} element={<Todolist />} />
          <Route path={SIGNIN_PAGE} element={<Signin />} />
          <Route path={SIGNUP_PAGE} element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
