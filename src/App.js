import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import List from './components/Lists/List';
import NewList from './components/NewList/NewList'
import EditList from './components/EditList/EditList';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import MyLists from './components/MyLists/MyLists';
import PageNotFound from './components/PageNotFound/PageNotFound';
import { SnackbarProvider } from 'notistack';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');

  return (
    <div className='app'>
      <SnackbarProvider>
        <Navbar username={username} setUsername={setUsername} />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='lists/:listId'
            element={<List />}
          />
          <Route
            path='lists/new'
            element={<NewList />}
          />
          <Route
            path='lists/edit/:listId'
            element={<EditList />}
          />
          <Route
            path='login'
            element={<Login setUsername={setUsername} />}
          />
          <Route
            path='signup'
            element={<Signup setUsername={setUsername} />}
          />
          <Route
            path='my-lists'
            element={<MyLists />}
          />
          <Route
            path='*'
            element={<PageNotFound />}
          />
        </Routes>
      </SnackbarProvider>
    </div>
  )
}

export default App;
