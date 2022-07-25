import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import App from './App';
import Home from './components/Home/Home';
import List from './components/Lists/List';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="lists">
          <Route path=":listId" element={<List />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
