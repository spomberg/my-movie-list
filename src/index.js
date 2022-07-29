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
import NewList from './components/NewList/NewList';
import EditList from './components/EditList/EditList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<App />}>
        <Route path="lists" element={<Home />}>
          <Route path=":listId" element={<List />} />
          <Route path="new" element={<NewList />} />
          <Route path="edit" element={<EditList />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
