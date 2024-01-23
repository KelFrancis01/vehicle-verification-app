import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ResponsiveBar from './components/ResponsiveBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ReportVehicle from './pages/ReportVehicle';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <ResponsiveBar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Login" element={<Login />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="ReportVehicle" element={<ReportVehicle />} />
          <Route path="Privacy" element={<Privacy />} />
          <Route path="Terms" element={<Terms />} />
        </Routes>
      <Footer />
    </div>
     
  );
}

export default App;
