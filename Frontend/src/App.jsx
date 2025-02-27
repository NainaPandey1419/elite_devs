import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/core/Auth/Login';
import SignUp from './components/core/Auth/SignUp';
import Dashboard from './components/common/Dashboard';
import Home from './components/core/HomePage/Home'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
