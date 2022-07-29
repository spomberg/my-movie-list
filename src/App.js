import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import List from './components/Lists/List';
import NewList from './components/NewList/NewList'
import useIndexData from './hooks/useIndexData';
import EditList from './components/EditList/EditList';
import './App.scss';
import { Routes, Route } from 'react-router-dom';

function App() {
  const indexData = useIndexData();
  return (
    <div className='app'>
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
          element={<NewList />}
        />
        <Route
          path='lists/edit/:listId'
          element={<EditList />}
        />
      </Routes>
    </div>
  );
}

export default App;
