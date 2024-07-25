import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div>
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
