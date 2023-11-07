import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppContextProvider } from './contexts/AppContextProvider';
import Layout from './components/Layout/Layout';
import Home from './container/Home';
import About from './container/About';
import Contact from './container/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <AppContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </AppContextProvider>
    </Router>
  );
}

export default App;
