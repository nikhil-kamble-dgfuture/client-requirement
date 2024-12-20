// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import QuoteGeneratorForm from './components/QuoteGeneratorForm';
import AIDubbingRequirement from './components/AIDubbingRequirement';
import ClientQuoteRequirement from './components/ClientQuoteRequirement';
import Footer from './components/Footer';
import ClientQuoteRequirements from './components/ClientQuoteRequirements';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<QuoteGeneratorForm />} />
        <Route path="/ai-dubbing-requirement" element={<AIDubbingRequirement />} />
        {/* <Route path="/client-quote-requirement" element={<ClientQuoteRequirement />} /> */}
        <Route path="/client-quote-requirement" element={<ClientQuoteRequirements />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
