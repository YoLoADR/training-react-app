import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppContextProvider } from './context/AppContextProvider'
import './App.css';
import Home from "./container/Home";
import About from "./container/About";
import Contact from "./container/Contact";
import PropertyDetails from "./container/PropertyDetails";
import Layout from "./components/Layout/Layout"

function App() {
//  logique du composant
  return (
    <Router>
      <AppContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/properties/:id" element={<PropertyDetails />} />
          </Routes>
          </Layout>
        </AppContextProvider>
        
    </Router>
  );
}

export default App;



