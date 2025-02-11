import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

// components
import Home from './components/Home';
import SignIn from './components/SignIn';
import Dashboard from './components/dashboard';
import SignUp from './components/SignUp';
import EditProfile from './components/EditProfile';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/edit-profile' element={<EditProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
