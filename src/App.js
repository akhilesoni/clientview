import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contracting from './pages/Contracting';
import Pipeline from './pages/Pipeline';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route path='' Component={Home}/>
          <Route path='/contracting' Component={Contracting}/>
          <Route path='/pipeline' Component={Pipeline}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
