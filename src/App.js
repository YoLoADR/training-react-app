import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import { AppContextProvider } from './context/AppContextProvider'
import { Provider } from 'react-redux';
import store from './store';
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
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/properties/:id" element={<PropertyDetails />} />
          </Routes>
        </Layout>
      </Provider>
    </Router>
  );
}

export default App;



