// src/App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase-config';

import Register from './Register';
import Login from './Login';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => alert("Logged out successfully"))
      .catch((err) => alert(err.message));
  };

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/register">Register</Link> | <Link to="/login">Login</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1>Firebase Auth Example</h1>
                {user ? (
                  <>
                    <p>Welcome, {user.email}</p>
                    <button onClick={handleLogout}>Logout</button>
                  </>
                ) : (
                  <p>Please register or login.</p>
                )}
              </div>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
