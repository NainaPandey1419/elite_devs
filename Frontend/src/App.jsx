import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/core/Auth/Login';
import SignUp from './components/core/Auth/SignUp';
import Dashboard from './components/common/Dashboard';
import Home from './components/core/HomePage/Home'
import InternshipStats from './components/core/Visualization/InternShip';
import GateStats from './components/core/Visualization/GateVirtual';
import CATStats from './components/core/Visualization/CAT';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/internships" element={<InternshipStats />} />
        <Route path="/gate" element={<GateStats />} />
        <Route path="/cat" element={<CATStats />} />
      </Routes>
    </Router>
  );
}

export default App;
