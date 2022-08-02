import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import List from './components/Lists/List';
import NewList from './components/NewList/NewList'
import EditList from './components/EditList/EditList';
import axiosConn from './axiosConn';
import { SnackbarProvider } from 'notistack';
import { Routes, Route } from 'react-router-dom';

function App() {
  
  axiosConn.get('/')
  .then((res) => console.log(res));

  return (
    <div className='app'>
      <SnackbarProvider>
        <Navbar />
        <Routes>
          <Route
            path='*'
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
        </Routes>
      </SnackbarProvider>
    </div>
  );
}

export default App;
