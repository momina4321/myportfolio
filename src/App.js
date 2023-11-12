import logo from './logo.svg';
import './App.css';
import {HashRouter as Router, Route,Routes} from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
      <Router  >
        <Routes>
<Route path="/" element={ <Home/> } />
</Routes>
      </Router>
     
    
  );
}

export default App;
