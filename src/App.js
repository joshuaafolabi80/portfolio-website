import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CV from './pages/CV';
import Works from './pages/Works';
import Contact from './pages/Contact';
import AgenticAI from './pages/AgenticAI'; // ADD THIS
import AgenticAIDetailPage from './pages/AgenticAIDetailPage'; // ADD THIS
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/works" element={<Works />} />
            <Route path="/agentic-ai" element={<AgenticAI />} /> {/* ADD THIS */}
            <Route path="/agentic-ai/:id" element={<AgenticAIDetailPage />} /> {/* ADD THIS */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;