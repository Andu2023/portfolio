import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  // Correct import
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

const HomePage = () => {
  return (
    <div className=''>
      <div className=''>
        <Navbar/>
        <Hero/>
      </div>
      <About />
      {/* <Experience />
      <Tech />
     
      <Talks />
      <Contact /> */} <Projects />
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
