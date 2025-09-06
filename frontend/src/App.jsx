import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Terminal from './pages/terminal.jsx';
import Home from './pages/home.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/terminal" element={<Terminal />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;