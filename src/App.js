import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import useApplicationData from './hooks/useApplicationData';
import './App.scss';

function App() {
  const state = useApplicationData();

  return (
    <div className='app'>
      <Navbar />
      <Home lists={state.lists} />
    </div>
  );
}

export default App;
