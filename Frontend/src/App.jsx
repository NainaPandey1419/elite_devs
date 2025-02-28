import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/core/Auth/Login';
import SignUp from './components/core/Auth/SignUp';
import Dashboard from './components/common/Dashboard';
import Home from './components/core/HomePage/Home'
import InternshipStats from './components/core/Visualization/InternShip';
import GateStats from './components/core/Visualization/GateVirtual';
import CATStats from './components/core/Visualization/CAT';
import NPTELVisual from './components/core/Visualization/NPTELVisual';
import PlacementVisule from './components/core/Visualization/PlacementVisule';


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
        <Route path="/nptel" element={<NPTELVisual />} />
        <Route path="/placement" element={<PlacementVisule />} />
      </Routes>
    </Router>
  );
}

export default App;
