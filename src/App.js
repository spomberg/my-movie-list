import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import List from './components/Lists/List';
import NewList from './components/NewList/NewList'
import EditList from './components/EditList/EditList';
import { SnackbarProvider } from 'notistack';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axiosConn from './axiosConn';

function App() {
  const [indexData, setIndexData] = useState({ lists: [] });
  useEffect(() => {
    Promise.resolve(axiosConn.get('/api/lists'))
    .then(all => { setIndexData(prev => ({ ...prev, lists: all.data }))})
  }, [])

  return (
    <div className='app'>
      <SnackbarProvider>
        <Navbar />
        <Routes>
          <Route
            path='*'
            element={<Home lists={indexData.lists} />}
          />
          <Route
            path='lists/:listId'
            element={<List />}
          />
          <Route
            path='lists/new'
            element={<NewList 
              setIndexData={setIndexData}
              indexData={indexData}
            />}
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
