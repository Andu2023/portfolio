import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  // Correct import
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Tech from './components/Tech';
import Contact from './components/Contact';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar section with no scroll background glitch */}
      <div className="bg-gray-100">
        <Navbar />
      </div>

      {/* Main content */}
      <div className="flex-grow">
        <Hero />
        <About />
        <Tech />
        <Experience />
        <Projects />
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};


const App = () => {
  return (
    <Router future={{
      v7_relativeSplatPath: true,
    }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};
export default App;
