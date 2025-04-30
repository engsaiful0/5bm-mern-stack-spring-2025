import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
// import './App.css';
import About from './About';
import Contact from './Contact';
import FramerMotion from './FramerMotion';
import TiltCard from './TiltCard';
import MarqueeExample from './MarqueeExample';
import ChartExample from './ChartExample';

import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";

import ThemeContext from './ThemeContext';
function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);


  return (
    <Router>
      <ThemeContext.Provider value="light">
       
        <div>
          <nav>
            <Link to="/">Home</Link> | <Link to="/about-component">About</Link>| <Link to="/contact">Contact</Link>
            |<Link to="/FramerMotion">FramerMotion</Link>
            |<Link to="/TiltCard">TiltCard</Link>
            |<Link to="/MarqueeExample">MarqueeExample</Link>
            |<Link to="/ChartExample">ChartExample</Link>
          </nav>
          <Routes>
            <Route path="/" element={
              <>
                <div>

                  <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                  </a>
                  <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                  </a>
                </div>
                <h1>Vite + React</h1>
                <div className="card">
                  <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                  </button>
                  <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                  </p>
                </div>
                <p className="read-the-docs">
                  Click on the Vite and React logos to learn more
                </p>
              </>
            } />
            <Route path="/about-component" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/framerMotion" element={<FramerMotion />} />
            <Route path="/tiltCard" element={<TiltCard />} />
            <Route path="/marqueeExample" element={<MarqueeExample />} />
            <Route path="/chartExample" element={<ChartExample />} />
          </Routes>
        </div>
        <div className="bg-blue-500 text-white p-4">Tailwind is working!</div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
