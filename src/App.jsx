// src/App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase-config';

import Register from './Register';
import Login from './Login';
import Contact from './Contact';
import ViewContact from './ViewContact';
import Ecommerce from './Ecommerce';


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
          <Link to="/">Home</Link> | <Link to="/register">Register</Link> | <Link to="/login">Login</Link>| <Link to="/contact">Contact</Link>
          | <Link to="/viewContact">ViewContact</Link>| <Link to="/Ecommerce">Ecommerce</Link>
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
          <Route path="/contact" element={<Contact />} />
          <Route path="/viewContact" element={<ViewContact />} />
          <Route path="/Ecommerce" element={<Ecommerce />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
