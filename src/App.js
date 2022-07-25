import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import List from './components/Lists/List';
import useIndexData from './hooks/useIndexData';
import './App.scss';
import { Routes, Route, useParams } from 'react-router-dom';

function App() {
  const state = useIndexData();

  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route
          path="*"
          element={<Home lists={state.lists} />}
        />
        <Route
          path="lists/:listId"
          element={<List />}
        />
    </Routes>
    </div>
  );
}

export default App;
