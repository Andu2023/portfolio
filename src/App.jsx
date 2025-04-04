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
    <div className=' relative z-0 bg-gray-950'>
      <div className=' bg-gray-950 bg-cover bg-no-repeat bg-center '>
        <Navbar/>
        <Hero/>
      </div>
      <About /> 
      <Experience />
      <Tech />
      <Projects />
     <Contact/>
      <Footer/>
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
