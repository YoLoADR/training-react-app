// App.js
import React from 'react';
import './i18n';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import ProtectedRoute from './components/ProtectedRoute'; // Assurez-vous que le chemin est correct
import Home from "./container/Home";
import User from "./container/User";
import About from "./container/About";
import Contact from "./container/Contact";
import PropertyDetails from "./container/PropertyDetails";
import Layout from "./components/Layout/Layout";
import Login from './container/Login'; // Assurez-vous que ce composant existe

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/properties/:id" element={<PropertyDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} /> {/* Page de connexion */}
            <Route path="/user-profile" element={
              <ProtectedRoute>
                <User/>
              </ProtectedRoute>
            } />
          </Routes>
        </Layout>
      </Provider>
    </Router>
  );
}

export default App;
