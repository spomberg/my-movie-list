import Navbar from './components/Navbar/Navbar';
import Lists from './components/Lists/Lists';
import useApplicationData from './hooks/useApplicationData';
import './App.scss';

function App() {
  const state = useApplicationData();

  return (
    <div className='app'>
      <Navbar />
      <Lists lists={state.lists} />
    </div>
  );
}

export default App;
